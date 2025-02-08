import { Module } from '../core/module'
import { random } from '../utils'
import { sounds } from '../sounds'

export class RandomAudioModule extends Module {
	trigger() {
		const randomIndex = random(0, sounds.length - 1)
		const randomSound = sounds[randomIndex]
		const audio = new Audio(randomSound)
		audio.play()
	}
}
