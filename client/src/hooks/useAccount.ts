import AccountsService from '../services/Accounts.service'
import { useMutation, useQuery } from '@tanstack/react-query';
import { ICreateAccount, IUpdateAccount } from '../interfaces/Account.interface'


export const useAccount = () => {

    const getAccounts = useQuery({
        queryKey: ['accounts'],
        queryFn: () => AccountsService.getAccounts(),
        select: ({ data }) => data
    })

    const getAccount = (account_id: string) => useQuery({
        queryKey: ['account', account_id],
        queryFn: () => AccountsService.getAccount(account_id),
        select: ({ data }) => data
    })

    const createAccount = useMutation({
        mutationFn: (newAccount: ICreateAccount) => AccountsService.createAccount(newAccount),
        onSuccess: () => { getAccounts.refetch() }
    })

    const updateAccount = useMutation({
        mutationFn: ({account_id, updAccount}: {account_id: string, updAccount: IUpdateAccount}) => AccountsService.updateAccount(account_id, updAccount),
        onSuccess: () => { getAccounts.refetch() }
    })

    const deleteAccount = useMutation({
        mutationFn: (account_id: string) => AccountsService.deleteAccount(account_id),
        onSuccess: () => { getAccounts.refetch() }
    })

    return { getAccounts, getAccount, createAccount, updateAccount, deleteAccount }

}
