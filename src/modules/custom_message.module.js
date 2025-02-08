import { Module } from '../core/module'
import { random } from '../utils'

export class CustomModule extends Module {
	constructor(type, text) {
		super(type, text)

		this.modalPhrase = [
			'Чтение — ключ к пониманию.',
			'Постоянство — залог успеха.',
			'Домашка делает меня счастливее.',
			'Дедлайн дышит в спину.',
			'Код без комментариев — как загадка без ответа.',
			'Бесконечные циклы — моя реальность.',
			'Для программиста: завтра — это не срок, а вызов.',
		]

		this.messageContainer = document.createElement('div')
		this.messageContainer.classList.add('message-container')

		this.messageText = document.createElement('p')
		this.messageText.classList.add('message-text')

		this.messageContainer.append(this.messageText)
		document.body.append(this.messageContainer)

		this.#applyStyles()
		this.currentIndex = 0
	}

	// Метод запуска модуля
	trigger() {
		this.showMessages() // Запускаем цикл показа сообщений
	}

	// Показ сообщений с выбором режима (рандомно или по порядку)
	showMessages() {
		const showNextMessage = () => {
			let message

			const useRandom = false // Можно переключить на true для случайного порядка

			if (useRandom) {
				// Режим: рандомные сообщения
				const randomIndex = random(0, this.modalPhrase.length - 1)
				message = this.modalPhrase[randomIndex]
			} else {
				// Режим: последовательные сообщения
				message = this.modalPhrase[this.currentIndex]
				this.currentIndex++ // Переходим к следующему сообщению
				if (this.currentIndex >= this.modalPhrase.length) {
					this.currentIndex = 0 // Если дошли до конца, начинаем с начала
				}
			}

			// Устанавливаем текст сообщения и показываем его
			this.messageText.textContent = message
			this.messageContainer.style.display = 'block'

			// Скрываем сообщение через 3 секунды
			setTimeout(() => {
				this.messageContainer.style.display = 'none' // Скрыть сообщение

				// Запускаем следующий показ через 1 секунду
				setTimeout(showNextMessage, 1000)
			}, 3000)
		}

		// Показываем первое сообщение
		showNextMessage()
	}

	#applyStyles() {
		const style = document.createElement('style')
		style.textContent = `
            .message-container {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: #ffeb3b;
                color: #000;
                border: 1px solid #fdd835;
                border-radius: 8px;
                padding: 15px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
                display: none; /* Контейнер скрыт по умолчанию */
                z-index: 1000;
            }
            .message-text {
                margin: 0;
                font-size: 16px;
                text-align: center;
            }
        `
		document.head.appendChild(style)
	}
}
