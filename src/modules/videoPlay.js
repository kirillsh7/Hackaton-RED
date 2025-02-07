import {Module} from '../core/module'

export class VideoPlayModule extends Module {
    constructor (type, text) {
            super(type, text);
            this.type = type;
            this.text = text;
        
    }

    trigger() {
const button = document.createElement('button');
button.textContent = 'Воспроизвести видео';

const video = document.createElement('video');
video.src = "https://player.vimeo.com/video/927033409?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
video.width = 640;
video.height = 360;
video.controls = true;

button.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    button.textContent = 'Пауза';
  } else {
    video.pause();
    button.textContent = 'Воспроизвести видео';
  }
});

document.body.appendChild(button);
document.body.appendChild(video);
}}