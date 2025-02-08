import './styles.css'

import { CustomModule as MessageModule } from './modules/custom_message.module'; 
const customMessage = new MessageModule('custom_message', 'Сообщение'); 
customMessage.trigger(); 