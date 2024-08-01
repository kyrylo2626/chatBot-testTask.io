import axios from 'axios'
import { IMessage, ICreateMessage, IUpdateMessage, IGetAPIMessage } from '../interfaces/Message.interface'


class MessagesService {

    private URL = import.meta.env.VITE_SERVER + '/api/messages';
    private API_URL = 'https://api.quotable.io/random';

    async getMessages(chat_id: string) { return axios.get<IMessage[]>(this.URL + '/all/' + chat_id) }

    async getMessage(message_id: string) { return axios.get(this.URL + '/one/' + message_id) }

    async createMessage(newMessage: ICreateMessage) { return axios.post(this.URL, { newMessage: newMessage }) }

    async updateMessage(message_id: string, updMessage: IUpdateMessage) { return axios.patch(this.URL + '/' + message_id, { updMessage: updMessage }) }

    async deleteMessage(message_id: string) { axios.delete(this.URL + '/' + message_id) }

    
    async getAPIMessage(chat_id: string) {
        const bot_massage = await axios.get<IGetAPIMessage>(this.API_URL);
        const messsage = { chat: chat_id, from_bot: true, text: bot_massage.data.content };
        return await this.createMessage(messsage);
    }

}

export default new MessagesService();