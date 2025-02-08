export function random(min, max) {
	return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}
export function getRandomHexColor() {
	return '#' + random(0, 16777215).toString(16).padStart(6, '0')
}
