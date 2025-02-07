import { Module } from '../core/module'

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
        video.src = "https://www.shutterstock.com/shutterstock/videos/3611971511/preview/stock-footage-driving-through-a-futuristic-illuminated-street-at-high-speed-experiencing-a-fast-paced-journey.webm";
        video.width = 640;
        video.height = 360;
        video.controls = true;
        video.style.display = 'none';

        button.addEventListener('click', function() {
          if (video.paused) {
            video.style.display = 'block';
            video.play();
            button.textContent = 'Пауза';
          } else {
            video.pause();
            button.textContent = 'Воспроизвести видео';
          }
        });

        document.body.appendChild(button);
        document.body.appendChild(video);
    }
}