import axios from 'axios'
import { IUser, ICreateUser, IUpdateUser } from '../interfaces/User.interface'


class UsersService {

    private URL = import.meta.env.VITE_SERVER + '/api/users';

    async getUsers() { return axios.get<IUser[]>(this.URL) }

    async getUser(user_id: string) { return axios.get(this.URL + '/' + user_id) }

    async createUser(newUser: ICreateUser) { return axios.post(this.URL, { newUser: newUser }) }

    async updateUser(user_id: string, updUser: IUpdateUser) { return axios.patch(this.URL + '/' + user_id, { updUser: updUser }) }

    async deleteUser(user_id: string) { axios.delete(this.URL + '/' + user_id) }

}

export default new UsersService();