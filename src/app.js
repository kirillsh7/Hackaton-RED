import './styles.css'
import { ContextMenu } from './menu'

const contextmenu = new ContextMenu('#menu')

document.addEventListener('contextmenu', function (event) {
	event.preventDefault()
	contextmenu.open(event)
})
