import axios from 'axios'
import { IChat, ICreateChat, IUpdateChat } from '../interfaces/Chat.interface'


class ChatsService {

    private URL = import.meta.env.VITE_SERVER + '/api/chats';

    async getChats(user_id: string) { return axios.get<IChat[]>(this.URL + '/all/' + user_id) }

    async getChat(chat_id: string) { return axios.get(this.URL + '/one/' + chat_id) }

    async getLatestMessages(user_id: string) { return axios.get(this.URL + '/last/' + user_id) }

    async createChat(newChat: ICreateChat) { return axios.post(this.URL, { newChat: newChat }) }

    async updateChat(chat_id: string, updChat: IUpdateChat) { return axios.patch(this.URL + '/' + chat_id, { updChat: updChat }) }

    async deleteChat(chat_id: string) { axios.delete(this.URL + '/' + chat_id) }

}

export default new ChatsService();