import loadMP4Module, { isWebCodecsSupported } from '../build/mp4.js';
import { nextTick, showMp4PreviewAndDownloadBtn } from '../libs/utils.js';

const WIDTH = 1280;
const HEIGHT = 720;

function getApp() {
  const app = new PIXI.Application({
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: 0x1099bb,
    resolution: window.devicePixelRatio || 1,
  });
  document.querySelector('.canvas-wrapper').appendChild(app.view);

  return app;
}

async function main() {
  if (!isWebCodecsSupported()) {
    const unsupportedText = document.createElement('div');
    unsupportedText.innerText = '当前浏览器不支持 WebCodecs，下载 Chrome Dev 版本后体验：https://www.google.com/chrome/dev/';

    return document.body.appendChild(unsupportedText);
  }

  const app = getApp();

  const canvas = app.view;

  const container = new PIXI.Container();
  app.stage.addChild(container);
  const texture = PIXI.Texture.from('https://pixijs.io/examples/examples/assets/bunny.png');

  for (let i = 0; i < 25; i++) {
    const bunny = new PIXI.Sprite(texture);
    bunny.anchor.set(0.5);
    bunny.x = (i % 5) * 40;
    bunny.y = Math.floor(i / 5) * 40;
    container.addChild(bunny);
  }

  container.x = app.screen.width / 2;
  container.y = app.screen.height / 2;
  container.pivot.x = container.width / 2;
  container.pivot.y = container.height / 2;

  const fps = 25;
  const duration = 10;
  const totalFrames = fps * duration;

  const MP4 = await loadMP4Module();
  const encoder = MP4.createWebCodecsEncoder({ width: WIDTH, height: HEIGHT, fps });

  const startTime = Date.now();
  /* eslint-disable-next-line */
  for (const _i of new Array(totalFrames)) {
    await nextTick();

    container.rotation -= 0.1;
    app.renderer.render(app.stage);

    const bitmap = await createImageBitmap(canvas);
    await encoder.addFrame(bitmap);
  }

  const buf = await encoder.end();

  const costTime = Date.now() - startTime;

  const info = `分辨率：1280 * 720
帧率：25
视频时长：${duration * 1000}ms
视频生成耗时：${costTime}ms`;
  showMp4PreviewAndDownloadBtn(buf, WIDTH, HEIGHT, info);
}

main();
