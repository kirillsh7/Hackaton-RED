import { Module } from '../core/module'
import { random } from '../utils'

export class PredictionModule extends Module {
	constructor(type, text) {
		super(type, text)

		this.predictionPhrase = [
			'Сегодня удача подружится с вами, как быстрая река, готовая принести свежие идеи.',
			'На этой неделе вам выпадет шанс, словно подарочная коробка, полная неожиданных событий.',
			'Скоро в вашей жизни появится новость, как легкий ветерок, принесший свежие решения и радостные моменты.',
			'Улыбнитесь! Ваша жизнь готовит для вас приятный сюрприз, словно теплое солнце после дождя!',
			'Ваши усилия вскоре принесут плоды, словно сад, цветущий весной в солнечную пору.',
			'На горизонте появляется новая возможность, как светлый маяк в тумане ночи.',
			'Ваша интуиция подскажет правильный путь, как звезды ведут путников в темноте.',
			'Ваша креативность расцветет, как яркие цветы на поляне, привлекая внимание всех вокруг.',
			'Скоро вы получите новые знания, как драгоценные камни, которые будут блестеть на пути к успеху.',
			'Будьте готовы к приятным сюрпризам, которые поступят, как дары от щедрой судьбы.',
			'Счастливые моменты скоро встретятся с вами, как блестящие звезды на ночном небе.',
			'Не бойтесь рисковать, ведь удача ждет тех, кто готов к переменам, как море, готовое принять смелых моряков.'
		]


		this.createInterface()

		this.#applyStyles()

		this.initEventListeners(); // клик на звезду

	
	}


	createInterface() {
        // Создаем элементы звезды
        this.starElement = document.createElement('div');
        this.starElement.id = 'star';
        this.starElement.style.width = '100px';
        this.starElement.style.height = '100px';
        this.starElement.style.background = '#f7b21e';
        this.starElement.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'; // Форма звезды
        this.starElement.style.cursor = 'pointer';
        this.starElement.style.position = 'absolute'; 
        this.starElement.style.top = '150px'; 
        this.starElement.style.left = '250px'; 

		const clickText = document.createElement('span');
        clickText.textContent = 'Клик';
        clickText.style.position = 'absolute';
        clickText.style.top = '49%';
        clickText.style.left = '50%';
        clickText.style.transform = 'translate(-50%, -50%)';
        clickText.style.color = '#0d1b2a'; 
        clickText.style.fontWeight = 'normal'; 
        clickText.style.fontSize = '17px'; 
		clickText.style.userSelect = 'none';
		this.starElement.style.transform = 'rotate(-20deg)'
		clickText.style.fontFamily = `Alumni Sans Pinstripe", serif`;


        this.starElement.appendChild(clickText); 


        // Создаём контейнер для предсказаний
        this.predictionContainer = document.createElement('div');
        this.predictionContainer.classList.add('prediction-container');

        this.predictionText = document.createElement('p');
        this.predictionText.classList.add('prediction-text');

        this.predictionContainer.append(this.predictionText);
        document.body.append(this.starElement, this.predictionContainer); // Добавляем элементы по очереди
    }


	initEventListeners() {
        // Обработчик клика на звезде
        this.starElement.addEventListener('click', this.showRandomPrediction.bind(this));

        // Обработчик контекстного меню
        document.addEventListener('contextmenu', (event) => {
            event.preventDefault(); // Отключаем стандартное контекстное меню
            this.showRandomPrediction(); // Показываем предсказание
        });
    }

	trigger() {
		this.showRandomPrediction()
	}

	showRandomPrediction() {
		const prediction = this.getRandomPrediction()
		this.predictionText.textContent = prediction
		this.predictionContainer.style.display = 'block'

		// убираем таймер, если он уже есть
		if (this.hideModalTimer) {
            clearTimeout(this.hideModalTimer);
        }

        // Скрываем предсказание через 4 секунды
        this.hideModalTimer = setTimeout(() => {
            this.predictionContainer.style.display = 'none';
        }, 4000);
	}

	getRandomPrediction() {
		const index = random(0, this.predictionPhrase.length - 1)
		return this.predictionPhrase[index]
	}


	#applyStyles() {
		const style = document.createElement('style');
        style.textContent = `
			
		@import url('https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe:ital@0;1&family=Great+Vibes&display=swap');
		@import url('https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe:ital@0;1&display=swap');

		

            .prediction-container {
                position: fixed;
                bottom: 100px; /* Расположение над звездой */
                right: 20%;
				left: 20%;
			    background-color: #f8f3ed;
                color: #0d1b2a;
                border: 1px solidrgb(53, 50, 40);
                border-radius: 8px;
                padding: 20px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
                display: none; /* Скрыто по умолчанию */
                z-index: 1000;
				user-select: none;              
            }
            .prediction-text {
                margin: 0;
				font-family: "Great Vibes", serif;
				font-weight: 400;
				font-style: normal;
                font-size: 44px;
				text-align: center;
            }
        `;
        document.head.appendChild(style);
    
	}
}