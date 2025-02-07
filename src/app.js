import './styles.css'

import { BackgroundModule } from './background.module.js';
const backgroundModule = new BackgroundModule('background', 'Изменить цвет фона');
backgroundModule.trigger();