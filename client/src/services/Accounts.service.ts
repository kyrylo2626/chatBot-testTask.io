import axios from 'axios'
import { IAccount, ICreateAccount, IUpdateAccount } from '../interfaces/Account.interface'


class AccountsService {

    private URL = import.meta.env.VITE_SERVER + '/api/accounts';

    async getAccounts() { return axios.get<IAccount[]>(this.URL) }

    async getAccount(account_id: string) { return axios.get(this.URL + '/' + account_id) }

    async createAccount(newAccount: ICreateAccount) { return axios.post(this.URL, { newAccount: newAccount }) }

    async updateAccount(account_id: string, updAccount: IUpdateAccount) { return axios.patch(this.URL + '/' + account_id, { updAccount: updAccount }) }

    async deleteAccount(account_id: string) { axios.delete(this.URL + '/' + account_id) }

}

export default new AccountsService();