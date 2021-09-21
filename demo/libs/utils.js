export function showMp4PreviewAndDownloadBtn(buf, width, height) {
  const url = URL.createObjectURL(new Blob([buf], { type: 'video/mp4' }));
  const video = document.createElement('video');
  video.setAttribute('muted', 'muted');
  video.setAttribute('autoplay', 'autoplay');
  video.setAttribute('controls', 'controls');
  const min = Math.min(width, window.innerWidth, window.innerHeight);
  const aspect = width / height;
  const size = min * 0.3;
  video.style.width = `${size}px`;
  video.style.height = `${size / aspect}px`;

  const container = document.body;
  container.appendChild(video);
  video.src = url;

  const text = document.createElement('div');
  const anchor = document.createElement('a');
  text.appendChild(anchor);
  anchor.href = url;
  anchor.id = 'download';
  anchor.textContent = '点击下载 mp4 文件';
  anchor.download = 'download.mp4';

  container.appendChild(text);
}

export function triggerDownload(buf, filename) {
  const url = URL.createObjectURL(new Blob([buf], { type: 'video/mp4' }));
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename || 'download';
  anchor.click();
}

export async function nextTick() {
  return new Promise((resolve) => requestAnimationFrame(resolve));
}
