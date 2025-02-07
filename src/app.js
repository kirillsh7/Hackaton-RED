import './styles.css'

import { BackgroundModule } from './modules/background.module';
const backgroundModule = new BackgroundModule('background', 'Изменить цвет фона');
backgroundModule.trigger();

import { RandomAudioModule } from './modules/randomAudio';
const randomAudioModule = new RandomAudioModule('randomAudio', 'Случайный звук');
randomAudioModule.trigger();