import UsersService from '../services/Users.service'
import { useMutation, useQuery } from '@tanstack/react-query';
import { ICreateUser, IUpdateUser } from '../interfaces/User.interface'


export const useUser = () => {

    const getUsers = useQuery({
        queryKey: ['users'],
        queryFn: () => UsersService.getUsers(),
        select: ({ data }) => data
    })

    const getUser = (user_id: string) => useQuery({
        queryKey: ['user', user_id],
        queryFn: () => UsersService.getUser(user_id),
        select: ({ data }) => data
    })

    const createUser = useMutation({
        mutationFn: (newUser: ICreateUser) => UsersService.createUser(newUser),
        onSuccess: () => { getUsers.refetch() }
    })

    const updateUser = useMutation({
        mutationFn: ({user_id, updUser}: {user_id: string, updUser: IUpdateUser}) => UsersService.updateUser(user_id, updUser),
        onSuccess: () => { getUsers.refetch() }
    })

    const deleteUser = useMutation({
        mutationFn: (user_id: string) => UsersService.deleteUser(user_id),
        onSuccess: () => { getUsers.refetch() }
    })

    return { getUsers, getUser, createUser, updateUser, deleteUser }

}
