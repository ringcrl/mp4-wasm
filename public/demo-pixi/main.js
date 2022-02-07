import loadMP4Module, { isWebCodecsSupported } from '../build/mp4.js';
import { showMp4PreviewAndDownloadBtn } from '../libs/utils.js';
import { MP4Demuxer } from '../libs/mp4_demuxer.js';

const WIDTH = 1280;
const HEIGHT = 720;
const FPS = 25;
const MP4_PATH = '../assets/1280-720-33s.mp4';

const tmpCanvas = document.createElement('canvas');
tmpCanvas.width = WIDTH;
tmpCanvas.height = HEIGHT;
let videoSprite = null;

const generatingTips = document.createElement('p');
generatingTips.innerText = '';

function getApp() {
  const app = new PIXI.Application({
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: 0x000000,
    resolution: window.devicePixelRatio || 1,
  });
  app.stage.sortableChildren = true;
  document.querySelector('.canvas-wrapper').appendChild(app.view);

  const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 100,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
  });

  const richText = new PIXI.Text('Webgl 渲染', style);
  richText.anchor.set(0.5, 0.5);
  richText.x = WIDTH / 2;
  richText.y = HEIGHT / 2;
  richText.zIndex = 10;

  app.stage.addChild(richText);

  return app;
}

const totalFrames = 835;
let currFrame = 1;

async function main() {
  if (!isWebCodecsSupported()) {
    const unsupportedText = document.createElement('div');
    unsupportedText.innerText = '当前浏览器不支持 WebCodecs，下载 Chrome Dev 版本后体验：https://www.google.com/chrome/dev/';
    return document.body.appendChild(unsupportedText);
  }

  document.body.appendChild(generatingTips);

  const app = getApp();

  generatingTips.innerText = '视频资源加载中...';

  const MP4 = await loadMP4Module();
  const encoder = MP4.createWebCodecsEncoder({ width: WIDTH, height: HEIGHT, fps: FPS });

  const demuxer = new MP4Demuxer(MP4_PATH);
  const videoTrackInfo = await demuxer.getVideoTrackInfo();

  const { duration } = demuxer.source.info;
  const startTime = Date.now();

  generatingTips.innerText = 'Pixi.js + WebCodecs decoder/encoder 视频生成中...';

  const decoder = new VideoDecoder({
    output: async (frame) => {
      try {
        tmpCanvas.getContext('2d').drawImage(frame, 0, 0, tmpCanvas.width, tmpCanvas.height);
        frame.close();
        if (!videoSprite) {
          const baseTexture = PIXI.BaseTexture.from(tmpCanvas, WIDTH, HEIGHT);
          const texture = new PIXI.Texture(baseTexture);
          videoSprite = new PIXI.Sprite(texture);
          app.stage.addChild(videoSprite);
        } else {
          const baseTexture = PIXI.BaseTexture.from(tmpCanvas, WIDTH, HEIGHT);
          const oldTexture = videoSprite.texture;
          oldTexture.baseTexture = baseTexture;
          oldTexture.update();
        }

        app.renderer.render(app.stage);

        const bitmap = await createImageBitmap(app.view);
        await encoder.addFrame(bitmap);

        currFrame++;

        if (currFrame >= totalFrames) {
          const costTime = Date.now() - startTime;
          const info = `分辨率：1280 * 720
帧率：25
视频时长：${duration}ms
解码渲染编码总耗时：${costTime}ms`;
          const buf = await encoder.end();
          showMp4PreviewAndDownloadBtn(buf, WIDTH, HEIGHT);
          generatingTips.innerText = info;
        }
      } catch (err) {
        console.error(err);
      }
    },
    error: (e) => console.error(e),
  });

  const config = {
    codec: videoTrackInfo.codec,
    description: videoTrackInfo.extradata,
  };

  console.assert(VideoDecoder.isConfigSupported(config));
  decoder.configure(config);

  demuxer.demuxVideo(0, (chunk) => {
    decoder.decode(chunk);
  });
}

main();
