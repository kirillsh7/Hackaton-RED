import {Module} from '../core/module'
import {random} from '../utils'

export class BackgroundModule extends Module {
    constructor (type, text) {
            super(type, text);
            this.type = type;
            this.text = text;
        
    }

    trigger() {
    const button = document.createElement('button');
    button.textContent = 'Изменить цвет фона';


    function getRandomHexColor() {
        return '#' + random(0, 16777215).toString(16).padStart(6, '0');
    }

    button.addEventListener('click', function() {
        const randomColor = getRandomHexColor();
        document.body.style.backgroundColor = randomColor;
    });


    document.body.appendChild(button);
}

}