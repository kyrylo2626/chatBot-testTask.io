import ChatsService from '../services/Chats.service'
import { useMutation, useQuery } from '@tanstack/react-query';
import { ICreateChat, IUpdateChat } from '../interfaces/Chat.interface';


export const useChat = (user_id: string, chat_id?: string) => {

    const getChats = useQuery({
        queryKey: ['chats', user_id],
        queryFn: () => ChatsService.getChats(user_id),
        select: ({ data }) => data
    })

    const getChat = useQuery({
        queryKey: ['chat', chat_id],
        queryFn: () => ChatsService.getChat(chat_id!),
        select: ({ data }) => data
    })

    const getLatestMessages = useQuery({
        queryKey: ['latest_chat', user_id],
        queryFn: () => ChatsService.getLatestMessages(user_id),
        select: ({ data }) => data
    }) 

    const createChat = useMutation({
        mutationFn: (newChat: ICreateChat) => ChatsService.createChat(newChat),
        onSuccess: () => { getChats.refetch() }
    })

    const updateChat = useMutation({
        mutationFn: ({chat_id, updChat}: {chat_id: string, updChat: IUpdateChat}) => ChatsService.updateChat(chat_id, updChat),
        onSuccess: () => { getChat.refetch(); getChats.refetch() }
    })

    const deleteChat = useMutation({
        mutationFn: (chat_id: string) => ChatsService.deleteChat(chat_id),
        onSuccess: () => { getChat.refetch(); getChats.refetch() }
    })


    const refetchAll = useMutation({
        mutationFn: (user_id: string) => ChatsService.getLatestMessages(user_id),
        onSuccess: () => { getChats.refetch(); return getLatestMessages.refetch() }
    })



    return { getChats, getChat, createChat, updateChat, deleteChat, getLatestMessages, refetchAll }

}
