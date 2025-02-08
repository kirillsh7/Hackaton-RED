import { Menu } from './core/menu'
import { ClicksModule } from './modules/clicks.module'
import { BackgroundModule } from './modules/background.module'
import { ShapeModule } from './modules/shape.module'
import { CustomModule } from './modules/custom_message.module'
import { RandomAudioModule } from './modules/randomAudio'
import { VideoPlayModule } from './modules/videoPlay'

export class ContextMenu extends Menu {
	open(e) {
		this.el.classList.add('open')
		this.el.style.left = `${e.pageX}px`
		this.el.style.top = `${e.pageY}px`

		if (this.el.textContent === '') {
			this.add()
		}
	}
	add() {
		const modules = [
			new ClicksModule('0', ' ClicksModule'),
			new BackgroundModule('1', 'Изменить цвет фона'),
			new ShapeModule('2', 'ShapeModule'),
			new CustomModule('3', 'Сообщение'),
			new VideoPlayModule('4', 'Видео'),
			new RandomAudioModule('5', 'Случайный звук'),
		]
		modules.forEach(el => {
			this.el.innerHTML = this.el.innerHTML + el.toHTML()
		})
		this.el.addEventListener('click', e => {
			modules[+e.target.dataset.type].trigger()
			this.close()
		})
	}
	close() {
		this.el.classList.remove('open')
	}
}
