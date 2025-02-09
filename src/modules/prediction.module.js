import { Module } from '../core/module'
import { random } from '../utils'
import { predictionPhrase } from '../predictionPhrase'
export class PredictionModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.predictionPhrase = predictionPhrase
        this.$body = document.createElement('div')
    }


    createInterface() {
        // Создаем элементы звезды
        this.starElement = document.createElement('div')
        this.starElement.id = 'star'
        this.starElement.style.width = '100px'
        this.starElement.style.height = '100px'
        this.starElement.style.background = '#f7b21e'
        this.starElement.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' // Форма звезды
        this.starElement.style.cursor = 'pointer'
        this.starElement.style.top = '150px'
        this.starElement.style.left = '250px'

        const clickText = document.createElement('span')
        clickText.textContent = 'Клик'
        clickText.style.position = 'absolute'
        clickText.style.top = '49%'
        clickText.style.left = '50%'
        clickText.style.transform = 'translate(-50%, -50%)'
        clickText.style.color = '#0d1b2a'
        clickText.style.fontWeight = 'normal'
        clickText.style.fontSize = '17px'
        clickText.style.userSelect = 'none'
        this.starElement.style.transform = 'rotate(-20deg)'
        clickText.style.fontFamily = `Alumni Sans Pinstripe", serif`


        this.starElement.appendChild(clickText)


        // Создаём контейнер для предсказаний
        this.predictionContainer = document.createElement('div')
        this.predictionContainer.classList.add('prediction-container')

        this.predictionText = document.createElement('p')
        this.predictionText.classList.add('prediction-text')

        this.predictionContainer.append(this.starElement, this.predictionText)
        document.body.append(this.predictionContainer) // Добавляем элементы по очереди
    }


    initEventListeners() {
        // Обработчик клика на звезде
        this.starElement.addEventListener('click', this.showRandomPrediction.bind(this))

        // Обработчик контекстного меню
        document.addEventListener('contextmenu', (event) => {
            event.preventDefault() // Отключаем стандартное контекстное меню
            this.showRandomPrediction() // Показываем предсказание
        })
    }

    trigger() {
        this.$body.className = "prediction-block"
        this.createInterface()
        this.#applyStyles()
        this.starElement.addEventListener('click', this.showRandomPrediction.bind(this))
    }

    showRandomPrediction() {
        const prediction = this.getRandomPrediction()
        this.predictionText.textContent = prediction
        this.predictionContainer.style.display = 'block'

        // убираем таймер, если он уже есть
        if (this.hideModalTimer) {
            clearTimeout(this.hideModalTimer)
        }

        // Скрываем предсказание через 4 секунды
        this.hideModalTimer = setTimeout(() => {
            this.predictionContainer.style.display = 'none'
        }, 4000)
    }

    getRandomPrediction() {
        const index = random(0, this.predictionPhrase.length - 1)
        return this.predictionPhrase[index]
    }


    #applyStyles() {
        const style = document.createElement('style')

        document.head.appendChild(style)

    }
}