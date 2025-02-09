import { Module } from '../core/module'
import * as Utils from '../utils.js'

export class ShapeModule extends Module {
	trigger() {

		const div = document.createElement('div')
		div.className = 'random-shape'
		div.style.position = 'fixed'
		div.style.marginLeft = `${Utils.random(1, 600)}px`
		div.style.marginTop = `${Utils.random(1, 500)}px`
		div.style.marginBottom = `200px`

		const randomFunc = Math.floor(Math.random() * Utils.funcs.length)
		Utils.funcs[randomFunc](div)
		document.querySelector('body').append(div)

	}
}
