import { Module } from '../core/module'

export class BackgroundModule extends Module {
	trigger() {
		console.log('Я BackgroundModule ')
	}
}
