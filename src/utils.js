export function random(min, max) {
	return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}
export function getRandomHexColor() {
	return '#' + random(0, 16777215).toString(16).padStart(6, '0')
}

export function getRandomCircle(elem) {
	elem.style.width = `${random(50, 80)}px`
	elem.style.height = `50px`
	elem.style.borderBottom = `50px solid ${getRandomHexColor()}`
	elem.style.borderRadius = `50px`
	elem.style.borderLeft = `0px`
	elem.style.borderRight = `0px`
}

export function getRandomTriangle(elem) {
	elem.style.width = `${random(50, 150)}px`
	elem.style.height = `${random(50, 150)}px`
	elem.style.borderLeft = `${random(50, 90)}px solid transparent`
	elem.style.borderRight = ` ${random(50, 90)}px solid transparent`
	elem.style.borderRadius = `0px`
	elem.style.borderBottom = ` ${random(30, 100)}px solid ${getRandomHexColor()}`

}

export function getRandomSquare(elem) {
	elem.style.width = `${random(1, 300)}px`
	elem.style.height = `${random(1, 300)}px`
	elem.style.borderRadius = `0px`
	elem.style.borderBottom = ` ${random(20, 100)}px solid ${getRandomHexColor()}`
}

export const funcs = [getRandomCircle, getRandomTriangle, getRandomSquare]