import './styles.css'

import { CustomModule as MessageModule } from './modules/custom_message.module'; 
import { PredictionModule } from './modules/prediction.module'


const customMessage = new MessageModule('custom_message', 'Сообщение'); 
customMessage.trigger(); 
const predictionModule = new PredictionModule('prediction', 'Предсказание'); 
predictionModule.trigger();

