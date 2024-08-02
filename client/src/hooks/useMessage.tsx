import MessagesService from '../services/Messages.service'
import { useMutation, useQuery } from '@tanstack/react-query';
import { ICreateMessage, IUpdateMessage } from '../interfaces/Message.interface'


export const useMessage = (chat_id: string) => {

    const getMessages = useQuery({
        queryKey: ['messages', chat_id],
        queryFn: () => MessagesService.getMessages(chat_id),
        select: ({ data }) => data
    })

    const getMessage = (message_id: string) => useQuery({
        queryKey: ['message', message_id],
        queryFn: () => MessagesService.getMessage(message_id),
        select: ({ data }) => data
    })

    const createMessage = useMutation({
        mutationFn: (newMessage: ICreateMessage) => MessagesService.createMessage(newMessage),
        onSuccess: () => { getMessages.refetch() }
    })

    const updateMessage = useMutation({
        mutationFn: ({message_id, updMessage}: {message_id: string, updMessage: IUpdateMessage}) => MessagesService.updateMessage(message_id, updMessage),
        onSuccess: () => { getMessages.refetch() }
    })

    const deleteMessage = useMutation({
        mutationFn: (message_id: string) => MessagesService.deleteMessage(message_id),
        onSuccess: () => { getMessages.refetch() }
    })


    const getAPIMessage = useMutation({
        mutationFn: (chat_id: string) => MessagesService.getAPIMessage(chat_id),
        onSuccess: () => { getMessages.refetch() }
    })


    return { getMessages, getMessage, createMessage, updateMessage, deleteMessage, getAPIMessage }

}