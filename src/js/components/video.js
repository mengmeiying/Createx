const videoBlock = document.querySelector('.video-block');

if(videoBlock) {
  const video = videoBlock.querySelector('video');
  const playBtn = videoBlock.querySelector('.video-block__play');

  playBtn.addEventListener('click', () => {
    videoBlock.classList.add('video-block--played');
    video.play();
    video.controls = true;
  })

  video.addEventListener('pause', () => {
    videoBlock.classList.remove('video-block--played');
    video.controls = false;
  })
}

