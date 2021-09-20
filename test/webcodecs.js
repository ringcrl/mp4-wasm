import loadMP4Module, { isWebCodecsSupported } from "/build/mp4.js";
import { showMp4PreviewAndDownloadBtn } from '/demo/utils.js'

const width = 1280;
const height = 720;

const canvas = document.querySelector("canvas");
canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext("2d");

const drawFrame = (interpolant) => {
  ctx.fillStyle = "#0000FF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, canvas.width * interpolant, canvas.height * interpolant);
};

async function start() {
  const fps = 25;
  const duration = 4;
  let frame = 0;
  let totalFrames = Math.round(fps * duration);

  console.time("encode");

  const MP4 = await loadMP4Module();
  const encoder = MP4.createWebCodecsEncoder({ width, height, fps });

  // Start encoding loop
  requestAnimationFrame(loop);

  async function loop() {
    if (frame < totalFrames) {
      console.log("Encoding frame %d of %d", frame + 1, totalFrames);

      // Render the canvas first
      drawFrame(frame / (totalFrames - 1));

      // Create a bitmap out of the frame
      const bitmap = await createImageBitmap(canvas);

      // Add bitmap to encoder
      await encoder.addFrame(bitmap);

      // Trigger next frame loop
      frame++;
      requestAnimationFrame(loop);
    } else {
      // Get an Uint8Array buffer
      const buf = await encoder.end();
      console.timeEnd("encode");
      showMp4PreviewAndDownloadBtn(buf, width, height);
      return;
    }
  }
}

if (isWebCodecsSupported()) {
  start();
} else {
  const unsupported = document.querySelector(".unsupported");
  if (unsupported) unsupported.style.display = "";
}
