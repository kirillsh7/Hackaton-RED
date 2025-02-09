import { Menu } from './core/menu'
import { ClicksModule } from './modules/clicks.module'
import { BackgroundModule } from './modules/background.module'
import { ShapeModule } from './modules/shape.module'
import { CustomModule } from './modules/custom_message.module'
import { RandomAudioModule } from './modules/randomAudio'
import { VideoPlayModule } from './modules/videoPlay'
import { TimerModule } from './modules/timer.module'

export class ContextMenu extends Menu {
	constructor(selector) {
		super(selector)
		this.modules = [
			new ClicksModule('0', ' Аналитика Клика'),
			new BackgroundModule('1', 'Изменить цвет фона'),
			new ShapeModule('2', 'Случайная фигура'),
			new CustomModule('3', 'Случайное сообщение'),
			new VideoPlayModule('4', 'Случайное видео'),
			new RandomAudioModule('5', 'Случайный звук'),
			new TimerModule('6', 'Таймер'),
		]
		this.$bodyChildNodes = document.body.childNodes
	}
	open(e) {
		if (this.el.textContent === '') {
			this.add()
		}
		if (this.modules.length !== 0) {
			this.el.classList.add('open')
			this.el.style.left = `${e.pageX}px`
			this.el.style.top = `${e.pageY}px`
		}
		this.$bodyChildNodes.forEach(el => {
			if (
				el === document.querySelector('video') ||
				el === document.querySelector('.timer') ||
				el === document.querySelector('.timer-block')
			) {
				document.body.removeChild(el)
			}
		})
	}
	add() {
		const listModules = this.modules.map(el => el.toHTML()).join('')
		this.el.innerHTML = listModules
		this.el.addEventListener('click', e => {
			e.stopPropagation()
			const type = e.target.dataset.type
			this.modules[+type].trigger()
			this.close()
		})
	}
	close() {
		this.el.classList.remove('open')
	}
}
