
export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

//функция рандомного цвета
export function getRandomColorofShape() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}


//функция, придающая рандомное расположение в рамках окна браузера
export function getRandomPositionOfShape(elem) {
  elem.style.position = 'fixed'
  elem.style.marginLeft = `${random(1, 600)}px`
  elem.style.marginTop = `${random(1, 500)}px`
  elem.style.marginBottom = `200px`
}

export function getRandomCircle(elem) {
  elem.style.width = `${random(50, 80)}px`;
  elem.style.height = `50px`;
  elem.style.borderBottom = `50px solid ${getRandomColorofShape()}`;
  elem.style.borderRadius = `50px`;
  elem.style.borderLeft = `0px`;
  elem.style.borderRight = `0px`;
}

export function getRandomTriangle(elem) {
  elem.style.width = `${random(50, 150)}px`;
  elem.style.height = `${random(50, 150)}px`;
  elem.style.borderLeft = `${random(50, 90)}px solid transparent`;
  elem.style.borderRight = ` ${random(50, 90)}px solid transparent`;
  elem.style.borderRadius = `0px`
  elem.style.borderBottom = ` ${random(30, 100)}px solid ${getRandomColorofShape()}`;

}

export function getRandomSquare(elem) {
  elem.style.width = `${random(1, 300)}px`;
  elem.style.height = `${random(1, 300)}px`;
  elem.style.borderRadius = `0px`
  elem.style.borderBottom = ` ${random(20, 100)}px solid ${getRandomColorofShape()}`;
}

export const funcs = [getRandomCircle, getRandomTriangle, getRandomSquare]
