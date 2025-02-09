
import { Module } from '../core/module.js'
import * as Utils from '../utils.js'

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text)
    }


    trigger() {
        const button = document.createElement('button')
        button.textContent = this.text
        document.querySelector('body').append(button)
        button.className = 'button-create-shape'

        const div = document.createElement('div')
        div.className = 'random-shape'

        button.addEventListener('click', event => {
            Utils.getRandomPositionOfShape(div)
            const randomFunc = Math.floor(Math.random() * Utils.funcs.length)
            Utils.funcs[randomFunc](div)
            document.querySelector('body').append(div)
        })

    }
}