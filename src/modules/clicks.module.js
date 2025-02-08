import { Module } from '../core/module'

export class ClicksModule extends Module {
	constructor(type, text) {
		super(type, text)
		this.timer = document.createElement('div')
		this.click = 0
		this.dblclick = 0
		this.isRunning = false
		this.time = 5
	}

	trigger() {
		if (this.isRunning) return
		this.isRunning = true

		Object.assign(this.timer.style, {
			color: 'silver',
			fontSize: '20px',
			backgroundColor: 'blue',
			textAlign: 'center',
		})

		this.timer.className = 'timer'

		const handler = function (e) {
			if (e.type === 'click') {
				this.click++
			} else if (e.type === 'dblclick') {
				this.dblclick++
			}
		}

		this.bindHindler = handler.bind(this)

		const interval = setInterval(() => {
			this.timer.textContent = `Кликай быстрее у тебя остлось ${this.time} секунд`

			this.time--

			if (this.time < 0) {
				clearInterval(interval)
				this.endTimer()
			}
		}, 1000)
		document.body.addEventListener('dblclick', this.bindHindler)
		document.body.addEventListener('click', this.bindHindler)
		document.body.appendChild(this.timer)
	}
	endTimer() {
		document.body.removeEventListener('click', this.bindHandler)
		document.body.removeEventListener('dblclick', this.bindHandler)

		this.timer.textContent = `Обычных кликов: ${this.click}, двойных: ${this.dblclick}`

		this.click = 0
		this.dblclick = 0
		this.isRunning = false
	}
}
