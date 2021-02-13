() => {
  const video = document.querySelector('video');
  const videoWidth = video.videoWidth;
  const videoHeight = video.videoHeight;
  const canvas = document.createElement('canvas');
  canvas.width = videoWidth;
  canvas.height = videoHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
  const title = document.querySelector('h2').innerText;
  const videoTime = document.querySelector('time').textContent.split(':');
  const formattedVideoTime = `${videoTime[0]}%E6%99%82${videoTime[1]}%E5%88%86${videoTime[2]}%E7%A7%92`;
  const fileName = `${title}-${formattedVideoTime}.jpg`;
  const a = document.createElement('a');
  a.href = canvas.toDataURL('image/jpeg', 0.9);
  a.download = fileName;
  a.click();
};
