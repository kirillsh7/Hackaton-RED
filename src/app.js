import './styles.css'
import { ContextMenu } from './menu'

const contextmenu = new ContextMenu('#menu')

document.addEventListener('contextmenu', function (event) {
	event.preventDefault()
	contextmenu.open(event)
})


import { CustomModule as MessageModule } from './modules/custom_message.module'; 
const customMessage = new MessageModule('custom_message', 'Сообщение'); 
customMessage.trigger(); 