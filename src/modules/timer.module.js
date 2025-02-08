import { Module } from '../core/module'

export class TimerModule extends Module {

trigger() {

const inputLabel = document.createElement('label');
inputLabel.textContent = 'Введите количество секунд';

const inputSeconds = document.createElement('input');
inputSeconds.type = 'number';
inputSeconds.value = 10;

const startButton = document.createElement('button');
startButton.textContent = 'Включить таймер';

const timerContainer = document.createElement('div');
timerContainer.id = 'timer';
timerContainer.style.display = 'none';
timerContainer.textContent = '00:00';

const messageContainer = document.createElement('div');
messageContainer.id = 'message';
messageContainer.style.display = 'none';
messageContainer.textContent = 'Отсчет окончен!';

document.body.appendChild(inputLabel);
document.body.appendChild(inputSeconds);
document.body.appendChild(startButton);
document.body.appendChild(timerContainer);
document.body.appendChild(messageContainer);

const style = document.createElement('style');
style.textContent = `
    body {
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    transition: background-color 0.5s ease;
  }
  
  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #3e8e41;
  }

  #timer {
    position: fixed;
    top: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 5px;
    border-radius: 5px;
    font-size: 16px;
  }
  #message {
    text-align: center;
    font-size: 20px;
    color: red;
  }
`;
document.head.appendChild(style);

startButton.addEventListener('click', function() {
  let totalSeconds = Number(inputSeconds.value);

  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    alert('Пожалуйста, введите корректное количество секунд.');
    return;
  }

  messageContainer.style.display = 'none';

  inputLabel.style.display = 'none';
  inputSeconds.style.display = 'none';
  startButton.style.display = 'none';

  timerContainer.style.display = 'block';

  function startTimer(seconds) {
    let timerInterval = setInterval(function() {
      let minutes = Math.floor(seconds / 60);
      let remainingSeconds = seconds % 60;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      remainingSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

      timerContainer.textContent = minutes + ":" + remainingSeconds;

      if (seconds <= 0) {
        clearInterval(timerInterval);
        timerContainer.textContent = "00:00";
        messageContainer.style.display = 'block';
        setTimeout(function() {
          timerContainer.remove();
          messageContainer.remove();
        }, 2500);
        return;
      } else {
        seconds--;
      }
    }, 1000);
  }

  startTimer(totalSeconds);
})
}}