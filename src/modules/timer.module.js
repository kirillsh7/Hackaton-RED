import { Module } from '../core/module'

export class TimerModule extends Module {
	constructor(type, text) {
		super(type, text)
		this.$elementTimer = document.createElement('div')
	}

	trigger() {
		this.$elementTimer.className = 'timer-block'
		const inputLabel = document.createElement('label')
		inputLabel.textContent = 'Введите количество секунд'

		const inputSeconds = document.createElement('input')
		inputSeconds.type = 'number'
		inputSeconds.value = 10

		const startButton = document.createElement('button')
		startButton.className = 'timer-button'
		startButton.textContent = 'Включить таймер'

		const timerContainer = document.createElement('div')
		timerContainer.id = 'timer'
		timerContainer.style.display = 'none'
		timerContainer.textContent = '00:00'

		const messageContainer = document.createElement('div')
		messageContainer.id = 'message'
		messageContainer.style.display = 'none'
		messageContainer.textContent = 'Отсчет окончен!'

		this.$elementTimer.append(
			inputLabel,
			inputSeconds,
			startButton,
			timerContainer,
			messageContainer
		)
		document.body.appendChild(this.$elementTimer)

		startButton.addEventListener('click', function () {
			let totalSeconds = Number(inputSeconds.value)

			if (isNaN(totalSeconds) || totalSeconds <= 0) {
				alert('Пожалуйста, введите корректное количество секунд.')
				return
			}

			messageContainer.style.display = 'none'

			inputLabel.style.display = 'none'
			inputSeconds.style.display = 'none'
			startButton.style.display = 'none'

			timerContainer.style.display = 'block'

			function startTimer(seconds) {
				let timerInterval = setInterval(function () {
					let minutes = Math.floor(seconds / 60)
					let remainingSeconds = seconds % 60

					minutes = minutes < 10 ? '0' + minutes : minutes
					remainingSeconds =
						remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds

					timerContainer.textContent = minutes + ':' + remainingSeconds

					if (seconds <= 0) {
						clearInterval(timerInterval)
						timerContainer.textContent = '00:00'
						messageContainer.style.display = 'block'
						setTimeout(function () {
							timerContainer.remove()
							messageContainer.remove()
						}, 2500)
						return
					} else {
						seconds--
					}
				}, 1000)
			}

			startTimer(totalSeconds)
		})
	}
}
