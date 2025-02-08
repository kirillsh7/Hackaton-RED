import { Module } from '../core/module'
import { getRandomHexColor } from '../utils'

export class BackgroundModule extends Module {
	trigger() {
		document.body.style.backgroundColor = getRandomHexColor()
	}
}
