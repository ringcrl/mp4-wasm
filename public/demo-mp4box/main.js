const FILE_URL = '../assets/1280-720-33s.mp4';

const handleAudioEncoding = true;

const FPS = 25;
const ONE_SECOND_IN_MICROSECOND = 1000000;
const BITRATE = 15000000;
const MICROSECONDS_PER_FRAME = ONE_SECOND_IN_MICROSECOND / FPS;

// const SAMPLE_RATE = 44100;
// const BUFFER_LENGTH = MICROSECONDS_PER_FRAME / ONE_SECOND_IN_MICROSECOND * SAMPLE_RATE;

let muxStarted = false;

const nbSampleMax = 30; // 每次提取的帧数
let nbSampleTotal = 0;
let countSample = 0;
let file = null;
let waitingFrame = false;
let stopped = true;
let videoTrack = null;
let audioTrack = null;
let outputFile = null;

let videoDuration = 0;
let videoDecoder = null;
const videoFrames = [];
let videoNbSample;
let decodedVideoFrameCount = 0;
let processingVideo = false;
let videoFramerate;
let videoW;
let videoH;

let audioDecoder = null;

const decodedAudioFrames = [];
let decodedAudioFrameCount = 0;
let audioTotalTimestamp = 0;
// let audioNbSample;
// let audioSamplerate;
// let audioChannelCount;
// const leftChannelOptions = {
//   planeIndex: 0,
//   frameOffset: 0,
//   frameCount: audioSampleLength,
// };
// const rightChannelOptions = {
//   planeIndex: 1,
//   frameOffset: 0,
//   frameCount: audioSampleLength,
// };
let processingAudio = false;

let videoEncoder = null;
// 最后一个读取帧和最后一个编码帧之间的差异
// 需要放慢进程，以避免VideoEncoder的饱和度
// 当VideoEncoder被我们发送的数据淹没时，这个过程就会变得更慢
// 当VideoDecoder的进程变得太慢的时候暂停视频解码/读取
const encodingFrameDistance = 5;

let waitingVideoReading = false;
let encodedVideoFrameCount = 0;
let encodingVideoTrack = null;
let videoFrameDurationInMicrosecond;
const encodingVideoScale = 0.5; // 更改输出视频
let outputW;
let outputH;

let audioEncoder = null;
let waitingAudioReading = false;
let encodingAudioTrack = null;
let encodedAudioFrameCount = 0;
let totalaudioEncodeCount = 0;

const output = document.createElement('canvas');
output.width = outputW;
output.height = outputH;
const ctx = output.getContext('2d');

document.body.appendChild(output);

outputFile = MP4Box.createFile();

const freeMemory = () => {
  if (processingVideo) {
    if (decodedVideoFrameCount > 0) {
      file.releaseUsedSamples(videoTrack.id, decodedVideoFrameCount - 1);
    }
    return;
  }
  if (processingAudio) {
    if (decodedAudioFrameCount > 0) {
      file.releaseUsedSamples(audioTrack.id, decodedAudioFrameCount - 1);
    }
  }
};

const onVideoDemuxingComplete = () => {
  videoDecoder.close();

  processingVideo = false;

  if (audioTrack && handleAudioEncoding) {
    setupAudioEncoder({
      // codec: audioTrack.codec,
      codec: 'opus',
      sampleRate: audioTrack.audio.sample_rate,
      numberOfChannels: audioTrack.audio.channel_count,
      bitrate: audioTrack.bitrate,
    });

    setupAudioDecoder({
      codec: audioTrack.codec,
      sampleRate: audioTrack.audio.sample_rate,
      numberOfChannels: audioTrack.audio.channel_count,
    });

    getNextSampleArray();
  }
};

const saveFile = () => {
  outputFile.save('test.mp4');
};

const onAudioDemuxingComplete = () => {
  audioDecoder.close();
};

const onAudioEncodingComplete = () => {
  audioEncoder.close();
  saveFile();
};

const onVideoEncodingComplete = () => {
  videoEncoder.close();

  if (!audioTrack || !handleAudioEncoding) saveFile();
};

const continueReading = () => {
  if (processingVideo) {
    waitingVideoReading = decodedVideoFrameCount - encodedVideoFrameCount > encodingFrameDistance;

    if (waitingVideoReading === false) {
      readNextFrame();
    } else {
      // console.log('waiting videoEncoder');
    }

    return;
  }

  if (processingAudio) {
    waitingAudioReading = decodedAudioFrameCount - encodedAudioFrameCount > encodingFrameDistance;

    if (waitingAudioReading === false) {
      readNextFrame();
    } else {
      // console.log('waiting audioEncoder');
    }
  }
};

const onVideoFrameReadyToUse = (imageBitmap) => {
  createImageBitmap(imageBitmap, 0, 0, videoW, videoH, { resizeWidth: outputW, resizeHeight: outputH, resizeQuality: 'high' }).then((bmp) => {
    ctx.drawImage(bmp, 0, 0);

    const timestamp = videoFrameDurationInMicrosecond * decodedVideoFrameCount;

    const videoFrame = new VideoFrame(bmp, { timestamp, duration: videoFrameDurationInMicrosecond });
    videoEncoder.encode(videoFrame);
    videoFrame.close();
    bmp.close();

    decodedVideoFrameCount++;

    if (decodedVideoFrameCount === nbSampleTotal) {
      onVideoDemuxingComplete();
    } else {
      continueReading();
    }
  });

  imageBitmap.close();
};

const onAudioFrameReadyToUse = (audioFrame) => {
  /*
    //just an example to expose how to get audio-sample-buffers from AudioData object :
    //
    //let leftChannel = new Float32Array(audioSampleLength * 4);
    //audioFrame.copyTo(leftChannel,leftChannelOptions);
    //
    //let rightChannel = leftChannel;
    //if(audioFrame.numberOfChannels > 1){
    //    rightChannel = new Float32Array(audioSampleLength * 4);
    //    audioFrame.copyTo(rightChannel,rightChannelOptions);
    //}

    */

  audioEncoder.encode(audioFrame);
  audioFrame.close();

  decodedAudioFrameCount++;

  if (decodedAudioFrameCount === nbSampleTotal) {
    onAudioDemuxingComplete();
  } else {
    readNextFrame();
  }
};

let getNextSampleArray = () => {
  if (!stopped || !muxStarted || (processingVideo && countSample === nbSampleTotal)) {
    return;
  }

  stopped = false;
  file.start();
};

let readNextFrame = () => {
  if (processingVideo) {
    if (videoFrames.length === 0) {
      if (decodedVideoFrameCount > 0) {
        if (!waitingFrame) {
          waitingFrame = true;
          getNextSampleArray();
        }
      }
    } else {
      onVideoFrameReadyToUse(videoFrames.shift());
    }
    return;
  }

  if (processingAudio) {
    if (decodedAudioFrames.length === 0) {
      if (decodedAudioFrameCount > 0) {
        if (!waitingFrame) {
          waitingFrame = true;
          getNextSampleArray();
        }
      }
    } else {
      onAudioFrameReadyToUse(decodedAudioFrames.shift());
    }
  }
};

const setupVideoEncoder = (config) => {
  const videoEncodingTrackOptions = {
    timescale: ONE_SECOND_IN_MICROSECOND,
    width: outputW,
    height: outputH,
    nb_samples: videoNbSample,
    media_duration: videoNbSample * 1000 / FPS,
    avcDecoderConfigRecord: null,
  };

  const videoEncodingSampleOptions = {
    duration: videoFrameDurationInMicrosecond,
    dts: 0,
    cts: 0,
    is_sync: false,
  };

  videoEncoder = new window.VideoEncoder({
    output: (encodedChunk, config) => {
      if (encodingVideoTrack == null) {
        videoEncodingTrackOptions.avcDecoderConfigRecord = config.decoderConfig.description;
        encodingVideoTrack = outputFile.addTrack(videoEncodingTrackOptions);
      }

      const buffer = new ArrayBuffer(encodedChunk.byteLength);
      encodedChunk.copyTo(buffer);

      videoEncodingSampleOptions.dts = encodedVideoFrameCount * MICROSECONDS_PER_FRAME;
      videoEncodingSampleOptions.cts = encodedVideoFrameCount * MICROSECONDS_PER_FRAME;
      videoEncodingSampleOptions.is_sync = encodedChunk.type === 'key';

      outputFile.addSample(encodingVideoTrack, buffer, videoEncodingSampleOptions);

      encodedVideoFrameCount++;

      if (encodedVideoFrameCount === videoNbSample) {
        onVideoEncodingComplete();
      } else if (waitingVideoReading) {
        continueReading();
      }
    },
    error: (err) => {
      console.error('VideoEncoder error : ', err);
    },

  });

  videoEncoder.configure(config);
};

let setupAudioEncoder = (config) => {
  const audioEncodingTrackOptions = {
    timescale: 44100,
    media_duration: 1476608,
    duration: 33484,
    nb_samples: 548,
    width: 0,
    height: 0,
    hdlr: 'soun',
    name: 'SoundHandler',
    type: 'mp4a',
  };

  const audioEncodingSampleOptions = {
    duration: videoFrameDurationInMicrosecond,
    dts: 0,
    cts: 0,
    is_sync: false,
  };

  audioEncoder = new window.AudioEncoder({
    output: (encodedChunk, config) => {
      if (encodingAudioTrack === null) {
        // audioEncoder.encode 触发的次数与 AudioEncoder.output 触发的次数不一致
        // 且没有找到将两段对齐的 API，只能手动算一个不精确的值了
        // https://github.com/w3c/webcodecs/issues/240
        totalaudioEncodeCount = Math.floor(audioTotalTimestamp / encodedChunk.duration);
        encodingAudioTrack = outputFile.addTrack(audioEncodingTrackOptions);
      }

      const buffer = new ArrayBuffer(encodedChunk.byteLength);
      encodedChunk.copyTo(buffer);

      audioEncodingSampleOptions.dts = encodedAudioFrameCount * encodedChunk.duration;
      audioEncodingSampleOptions.cts = encodedAudioFrameCount * encodedChunk.duration;
      audioEncodingSampleOptions.is_sync = encodedChunk.type === 'key';

      outputFile.addSample(encodingAudioTrack, buffer, audioEncodingSampleOptions);

      encodedAudioFrameCount++;

      if (encodedAudioFrameCount >= totalaudioEncodeCount) {
        onAudioEncodingComplete();
      } else if (waitingAudioReading) {
        continueReading();
      }
    },
    error: (err) => {
      console.error('AudioEncoder error : ', err);
    },
  });

  audioEncoder.configure(config);
};

const getExtradata = () => {
  // generate the property "description" for the object used in VideoDecoder.configure
  // This function have been written by Thomas Guilbert from Google

  const avccBox = file.moov.traks[0].mdia.minf.stbl.stsd.entries[0].avcC;

  let i; let size = 7;
  for (i = 0; i < avccBox.SPS.length; i++) size += 2 + avccBox.SPS[i].length;
  for (i = 0; i < avccBox.PPS.length; i++) size += 2 + avccBox.PPS[i].length;

  let id = 0;
  const data = new Uint8Array(size);

  const writeUint8 = (value) => {
    data.set([value], id);
    id++;
  };
  const writeUint16 = (value) => {
    const arr = new Uint8Array(1);
    arr[0] = value;
    const buffer = new Uint8Array(arr.buffer);
    data.set([buffer[1], buffer[0]], id);
    id += 2;
  };
  const writeUint8Array = (value) => {
    data.set(value, id);
    id += value.length;
  };

  writeUint8(avccBox.configurationVersion);
  writeUint8(avccBox.AVCProfileIndication);
  writeUint8(avccBox.profile_compatibility);
  writeUint8(avccBox.AVCLevelIndication);
  writeUint8(avccBox.lengthSizeMinusOne + (63 << 2));
  writeUint8(avccBox.nb_SPS_nalus + (7 << 5));

  for (i = 0; i < avccBox.SPS.length; i++) {
    writeUint16(avccBox.SPS[i].length);
    writeUint8Array(avccBox.SPS[i].nalu);
  }

  writeUint8(avccBox.nb_PPS_nalus);
  for (i = 0; i < avccBox.PPS.length; i++) {
    writeUint16(avccBox.PPS[i].length);
    writeUint8Array(avccBox.PPS[i].nalu);
  }

  if (id !== size) throw new Error('size mismatched !');
  return data;
};

const setupVideoDecoder = (config) => {
  let timeout = null;

  processingVideo = true;
  waitingFrame = true;
  countSample = 0;
  nbSampleTotal = videoTrack.nb_samples;

  output.width = outputW;
  output.height = outputH;

  videoDecoder = new window.VideoDecoder({
    output: (videoFrame) => {
      createImageBitmap(videoFrame).then((img) => {
        videoFrames.push(img);
        videoFrame.close();
        freeMemory();

        // I use a timeout to give some time to videoDecoder to provide a bunch of frames
        // The idea behind this is to maintain a small amount of active frames in memory.
        //
        //= > videoDecoder output frame by frame but I can't compare the amount of
        // frame decoded by VideoDecoder and the amount of frame sent to VideoDecoder
        // because the first bunch of frames released by VideoDecoder is always smaller than
        // the amount of frame sent.
        //
        // the amount of frames released at the beginning depends of the video file itself, it's not
        // a fixed value.
        //= ==> the difference will be released at the end of the decoding using VideoDecoder.flush
        //
        // Without setTimeout, the process start again once I got a single frame.
        //= > I extract new frames once the array "videoFrames" is empty, so if i continue the process
        // immediatly after I got a single frame, the array become empty almost immediatly and the extraction
        // provide a lot of frame too early compared to the real progress of the video-reading

        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          if (waitingFrame) {
            waitingFrame = false;
            continueReading();
          }
        }, 15);
      });
    },
    error: (e) => {
      console.error('VideoDecoder error : ', e);
    },
  });

  videoDecoder.configure(config);
  file.setExtractionOptions(videoTrack.id, null, { nbSamples: nbSampleMax });
};

const setupAudioDecoder = (config) => {
  let timeout = null;
  countSample = 0;
  processingAudio = true;
  waitingFrame = true;
  nbSampleTotal = audioTrack.nb_samples;

  audioDecoder = new window.AudioDecoder({
    output: (audioFrame) => {
      decodedAudioFrames.push(audioFrame);

      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        if (waitingFrame) {
          waitingFrame = false;
          readNextFrame();
        }
      }, 15);
    },
    error: (err) => {
      console.error('AudioDecoder error : ', err);
    },
  });

  audioDecoder.configure(config);

  file.setExtractionOptions(audioTrack.id, null, { nbSamples: nbSampleMax });
};

const loadFile = (url) => {
  file = MP4Box.createFile();

  file.onerror = (e) => {
    console.error('file onerror ', e);
  };

  file.onError = (e) => {
    console.error('MP4Box file error => ', e);
  };
  file.onReady = (info) => {
    muxStarted = true;
    videoTrack = info.videoTracks[0];
    audioTrack = info.audioTracks[0];

    if (audioTrack) {
      // audioSamplerate = audioTrack.audio.sample_rate;
      // audioChannelCount = audioTrack.audio.channel_count;
      // audioNbSample = audioTrack.nb_samples;
      audioTotalTimestamp = audioTrack.samples_duration / audioTrack.audio.sample_rate * ONE_SECOND_IN_MICROSECOND;
    }
    videoNbSample = videoTrack.nb_samples;
    // TODO: 有一些视频，videoTrack.movie_duration 得不到正确的 duration
    videoDuration = (info.duration / info.timescale) * 1000;

    // TODO: 使用 Math.ceil 会导致不精确
    videoFramerate = Math.ceil(1000 / (videoDuration / videoTrack.nb_samples));
    videoFrameDurationInMicrosecond = ONE_SECOND_IN_MICROSECOND / videoFramerate;

    videoW = videoTrack.track_width;
    videoH = videoTrack.track_height;

    outputW = videoW * encodingVideoScale;
    outputH = videoH * encodingVideoScale;

    setupVideoEncoder({
      codec: 'avc1.42001E',
      width: outputW,
      height: outputH,
      hardwareAcceleration: 'prefer-hardware',
      framerate: videoFramerate,
      bitrate: BITRATE,
      avc: { format: 'avc' },
    });

    setupVideoDecoder({
      codec: videoTrack.codec,
      codedWidth: videoW,
      codedHeight: videoH,
      description: getExtradata(),
    });

    onVideoReadyToPlay(); // getNextSampleArray() => file.start()
  };

  file.onSamples = (trackId, ref, samples) => {
    // 为了节省内存，一点一点地处理dumux-step，所以在两个demux-process之间停止读文件

    if (videoTrack.id === trackId) {
      stopped = true;
      file.stop();

      countSample += samples.length;

      for (const sample of samples) {
        const type = sample.is_sync ? 'key' : 'delta';

        const chunk = new window.EncodedVideoChunk({
          type,
          timestamp: sample.cts,
          duration: sample.duration,
          data: sample.data,
        });

        videoDecoder.decode(chunk);
      }

      if (countSample === nbSampleTotal) {
        videoDecoder.flush();
      }

      return;
    }

    if (audioTrack.id === trackId) {
      stopped = true;
      file.stop();
      countSample += samples.length;

      for (const sample of samples) {
        const type = sample.is_sync ? 'key' : 'delta';

        const chunk = new window.EncodedAudioChunk({
          type,
          timestamp: sample.cts,
          duration: sample.duration,
          data: sample.data,
          offset: sample.offset,
        });

        audioDecoder.decode(chunk);
      }

      if (countSample === nbSampleTotal) {
        audioDecoder.flush();
      }
    }
  };

  fetch(url).then((response) => {
    let offset = 0;
    let buf;
    const reader = response.body.getReader();

    const push = () => reader.read().then(({ done, value }) => {
      if (done === true) {
        file.flush(); // 会触发 file.onReady
        return;
      }

      buf = value.buffer;
      buf.fileStart = offset;
      offset += buf.byteLength;
      file.appendBuffer(buf);
      push();
    }).catch((e) => {
      console.error('reader error ', e);
    });
    push();
  });
};

let onVideoReadyToPlay = () => {
  getNextSampleArray();
};

function main() {
  loadFile(FILE_URL);
}

main();
