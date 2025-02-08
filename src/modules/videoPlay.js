import { Module } from '../core/module'
import {random} from '../utils'

export class VideoPlayModule extends Module {
    constructor (type, text) {
            super(type, text);
            this.type = type;
            this.text = text;
    }

    trigger() {
        const button = document.createElement('button');
        button.textContent = 'Воспроизвести видео';

        const videos = [
          "https://www.shutterstock.com/shutterstock/videos/3611971511/preview/stock-footage-driving-through-a-futuristic-illuminated-street-at-high-speed-experiencing-a-fast-paced-journey.webm",
          "https://www.shutterstock.com/shutterstock/videos/1098290955/preview/stock-footage-gratis-stamp-imprint-seal-template-k-video-motion-graphics-footage-chroma-key-alpha-channel.webm",
          "https://www.shutterstock.com/shutterstock/videos/1105965645/preview/stock-footage-dance-beach-and-senior-couple-with-love-smile-and-romance-with-quality-time-marriage-and-travel.webm",
          "https://www.shutterstock.com/shutterstock/videos/1085515565/preview/stock-footage-portrait-of-smiling-woman-dancing-in-flower-field-outdoors-flirty-girl-with-long-red-hair-turning.webm",
          "https://www.shutterstock.com/shutterstock/videos/3614026679/preview/stock-footage-dancing-friends-and-night-with-women-in-club-for-new-years-eve-party-celebration-and-concert.webm",
          "https://www.shutterstock.com/shutterstock/videos/1093115379/preview/stock-footage--d-render-of-abstract-art-video-animation-with-explosive-smoke-structure-based-on-small-balls.webm",
          "https://www.shutterstock.com/shutterstock/videos/3660113613/preview/stock-footage-close-up-of-hot-coffee-cup-blue-cup-of-coffee-on-the-grey-sofa-with-lighting-background.webm",
          "https://www.shutterstock.com/shutterstock/videos/1107641479/preview/stock-footage-atlantis-the-lost-city-underwater-d-rendering-of-massive-structures-underwater.webm",
          "https://www.shutterstock.com/shutterstock/videos/3650091503/preview/stock-footage-a-young-man-buttoning-his-dark-blue-suit-outdoor-handsome-man-dressing-up-with-blue-suit.webm",
          "https://www.shutterstock.com/shutterstock/videos/1078603208/preview/stock-footage-futuristic-hud-interface-around-human-body-in-the-center-motion-graphics-dynamically-reveal.webm",
          ]

        const video = document.createElement('video');
        video.width = 640;
        video.height = 360;
        video.controls = true;
        video.style.display = 'none';

        function loadAndPlayRandomVideo() {
          const randomIndex = random(0, videos.length - 1);
          const randomVideo = videos[randomIndex];
          video.src = randomVideo;
          video.load();
          video.style.display = 'block';
          video.play();
          button.textContent = 'Пауза';
      }

        button.addEventListener('click', function() {
          if (video.paused) {
            loadAndPlayRandomVideo();
          } else {
            video.pause();
            video.style.display = 'none';
            button.textContent = 'Воспроизвести видео';
          }
        });

        document.body.appendChild(button);
        document.body.appendChild(video);
    }
}