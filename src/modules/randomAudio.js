import {Module} from '../core/module'

export class RandomAudioModule extends Module {
    constructor (type, text) {
            super(type, text);
            this.type = type;
            this.text = text;
        
    }

    trigger() {
    
const button = document.createElement('button');
button.textContent = 'Случайный звук';

const sounds = [
  'https://zvukipro.com/uploads/files/2021-08/1629553191_nichego.mp3',
  'https://zvukipro.com/uploads/files/2021-08/1629553411_malovato.mp3',
  'https://zvukipro.com/uploads/files/2021-08/1629553697_bojare.mp3',
  'https://zvukipro.com/uploads/files/2021-08/1629553748_hfpvthxbr.mp3',
  'https://zvukipro.com/uploads/files/2024-01/1705883382_krivye.mp3',
  'https://zvukipro.com/uploads/files/2024-01/1705883582_chto-to-ne-to.mp3',
  'https://zvukipro.com/uploads/files/2024-01/1705991762_jaijaaa.mp3',
  'https://zvukipro.com/uploads/files/2023-12/1703218885_ladneo-i.mp3',
  'https://zvukipro.com/uploads/files/2023-12/1703219346_ybxtuj.mp3',
  'https://zvukipro.com/uploads/files/2023-12/1703217243_pozhsta.mp3',
  'https://zvukipro.com/uploads/files/2023-12/1703217908_jej-vy.mp3',
  'https://zvukipro.com/uploads/files/2023-12/1703218006_otkuda.mp3',
]

function playRandomSound() {
  const randomIndex = Math.floor(Math.random() * sounds.length);
  const randomSound = sounds[randomIndex];

  const audio = new Audio(randomSound);
  audio.play();
}

button.addEventListener('click', playRandomSound);

document.body.appendChild(button);

}

}