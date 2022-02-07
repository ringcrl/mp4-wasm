import EventEmitter from 'event-emitter';
import Merge from 'deepmerge';
import Task from './task';
import MP4Buffer from './MP4Buffer';
import Parser from './parse';
import Errors from './error';
import util from './util';

const URL = '../assets/xgplayer-demo.mp4';

class MP4 {
  constructor(url, chunkSize = 25 ** 4) {
    EventEmitter(this);
    this.url = url;
    this.init(url);
    this.once('moovReady', this.moovParse.bind(this));
    this.cache = new MP4Buffer();
  }

  /**
     * [getData 根据字节区间下载二进制数据]
     * @param  {Number} [start=0]  [起始字节]
     * @param  {Number} [end=start + this.CHUNK_SIZE] [截止字节]
     */
  getData(start = 0, end = start + this.CHUNK_SIZE) {
    const self = this;
    return new Promise((resolve, reject) => {
      const task = new Task(this.url, [
        start, end,
      ], this.withCredentials, resolve);
      task.once('error', (err) => {
        self.emit('error', err);
      });
    });
  }

  /**
     * [init 实例的初始化，主要是获取视频的MOOV元信息]
     */
  init() {
    const self = this;
    self.getData().then((res) => {
      let parsed;

      let moovStart = 0;

      let moov;

      try {
        parsed = new Parser(res);
      } catch (e) {
        self.emit('error', e.type ? e : new Errors('parse', '', { line: 176, handle: '[MP4] init', msg: e.message }));
        return false;
      }
      const boxes = parsed.boxes;
      self._boxes = boxes;
      boxes.every((item) => {
        moovStart += item.size;
        if (item.type === 'moov') {
          moov = item;
          self.moovBox = moov;
          debugger;
          self.emit('moovReady', moov);
          return false;
        }
        return true;
      });
      if (!moov) {
        const nextBox = parsed.nextBox;
        if (nextBox) {
          if (nextBox.type === 'moov') {
            self.getData(moovStart, moovStart + nextBox.size + 28).then((res) => {
              const parsed = new Parser(res);
              self._boxes = self._boxes.concat(parsed.boxes);
              moov = parsed.boxes.filter((box) => box.type === 'moov');
              if (moov.length) {
                self.moovBox = moov[0];
                self.emit('moovReady', moov);
              } else {
                self.emit('error', new Errors('parse', '', { line: 203, handle: '[MP4] init', msg: 'not find moov box' }));
              }
            });
          } else {
            self.emit('error', new Errors('parse', '', { line: 207, handle: '[MP4] init', msg: 'not find moov box' }));
          }
        } else {
          self.getData(moovStart, '').then((res) => {
            const parsed = new Parser(res);
            if (parsed) {
              self._boxes = self._boxes.concat(parsed.boxes);
              parsed.boxes.every((item) => {
                if (item.type === 'moov') {
                  moov = item;
                  self.moovBox = moov;
                  self.emit('moovReady', moov);
                  return false;
                }
                return true;
              });
            } else {
              self.emit('error', new Errors('parse', '', { line: 225, handle: '[MP4] init', msg: 'not find moov box' }));
            }
          });
        }
      }
    }).catch(() => {
      self.emit('error', new Errors('network', '', { line: 231, handle: '[MP4] getData', msg: 'getData failed' }));
    });
  }

  /**
     * [moovParse 解析视频信息]
     * @return {[type]} [description]
     */
  moovParse() {
    const self = this;
    const moov = this.moovBox;
    const mvhd = util.findBox(moov, 'mvhd');
    let traks = util.findBox(moov, 'trak');
    let videoTrak;
    let audioTrak;
    let videoCodec;
    let audioCodec;
    let videoTimeScale;
    let audioTimeScale;
    let sps;
    let pps;
    let profile;
    let width;
    let height;
    let channelCount;
    let sampleRate;
    let decoderConfig;
    traks = [].concat(traks);
    traks.forEach((trak) => {
      const hdlr = util.findBox(trak, 'hdlr');
      const mdhd = util.findBox(trak, 'mdhd');
      if (!hdlr || !mdhd) {
        self.emit('error', new Errors('parse', '', { line: 72, handle: '[MP4] moovParse', url: self.url }));
        return;
      }
      if (hdlr.handleType === 'vide' && self.videoOnly) {
        const elst = util.findBox(trak, 'elst');
        trak.empty_duration = 0;
        if (elst.empty_duration) {
          trak.empty_duration = elst.empty_duration * mdhd.timescale / mvhd.timeScale;
        }

        trak.time_offset = elst.start_time - trak.empty_duration;
      }

      const stsd = util.findBox(trak, 'stsd');
      const codecBox = stsd.subBox[0];
      if (hdlr.handleType === 'vide') {
        const avcC = util.findBox(trak, 'avcC');
        const tkhd = util.findBox(trak, 'tkhd');
        videoTrak = trak;
        videoTimeScale = mdhd.timescale;
        if (avcC) {
          videoCodec = `${codecBox.type}.${util.toHex(avcC.profile, avcC.profileCompatibility, avcC.AVCLevelIndication).join('')}`;
          sps = avcC.sequence && avcC.sequence.map((item) => Number(`0x${item}`));
          pps = avcC.pps && avcC.pps.map((item) => Number(`0x${item}`));
          profile = avcC.profile;
        } else {
          videoCodec = `${codecBox.type}`;
        }
        if (tkhd) {
          width = tkhd.width;
          height = tkhd.height;
        }
      }
      if (hdlr.handleType === 'soun') {
        audioTrak = trak;
        const esds = util.findBox(trak, 'esds');
        const mp4a = util.findBox(trak, 'mp4a');
        const ESDescriptor = util.findBox(trak, 5);
        audioTimeScale = mdhd.timescale;
        if (esds) {
          audioCodec = `${codecBox.type}.${util.toHex(esds.subBox[0].subBox[0].typeID)}.${esds.subBox[0].subBox[0].subBox[0].type}`;
        } else {
          audioCodec = `${codecBox.type}`;
        }
        if (ESDescriptor && ESDescriptor.EScode) {
          decoderConfig = ESDescriptor.EScode.map((item) => Number(`0x${item}`));
        }
        if (mp4a) {
          channelCount = mp4a.channelCount;
          sampleRate = mp4a.sampleRate;
        }
      }
    });
    this.videoTrak = Merge({}, videoTrak);
    if (!this.videoOnly) {
      this.audioTrak = Merge({}, audioTrak);
    }
    const mdat = this._boxes.find((item) => item.type === 'mdat');
    const videoDuration = util.seekTrakDuration(videoTrak, videoTimeScale);
    let audioDuration;
    if (!this.videoOnly) {
      audioDuration = util.seekTrakDuration(audioTrak, audioTimeScale);
    }
    this.mdatStart = mdat.start;
    const vf = this.videoKeyFrames;
    const videoKeyFramesLength = vf.length - 1;
    vf.forEach((item, idx) => {
      if (idx < videoKeyFramesLength) {
        this.timeRage.push([
          item.time.time / videoTimeScale,
          vf[idx + 1].time.time / videoTimeScale,
        ]);
      } else {
        this.timeRage.push([
          item.time.time / videoTimeScale,
          -1,
        ]);
      }
    });
    this.meta = {
      videoCodec,
      createTime: mvhd.createTime,
      modifyTime: mvhd.modifyTime,
      duration: videoDuration,
      timeScale: mvhd.timeScale,
      videoDuration,
      videoTimeScale,
      endTime: videoDuration,
      sps,
      pps,
      width,
      height,
      profile,
      pixelRatio: [
        1, 1,
      ],
      channelCount,
      sampleRate,
      audioConfig: decoderConfig,
    };
    if (!this.videoOnly) {
      this.meta.audioCodec = audioCodec;
      this.meta.audioDuration = audioDuration;
      this.meta.audioTimeScale = audioTimeScale;
      this.meta.duration = mvhd.duration / mvhd.timeScale;
      this.meta.endTime = Math.min(videoDuration, audioDuration);
    }
  }
}

new MP4(URL);
