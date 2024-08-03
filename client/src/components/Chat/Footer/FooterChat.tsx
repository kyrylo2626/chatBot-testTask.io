import './FooterChat.css'
import { IoSend, IoCheckmark } from "react-icons/io5";
import { useMessage } from '../../../hooks/useMessage';
import { useLocalStore } from '../../../hooks/useLocalStore';
import { useChat } from '../../../hooks/useChat';
import { useEffect, useState } from 'react';
import { IMessage } from '../../../interfaces/Message.interface';


export default function FooterChat() {

    const [ newMessage, setNewMessage ] = useState('');
    
    const { userRefId, chatRefId } = useLocalStore();
    const { createMessage, getAPIMessage } = useMessage(chatRefId);
    const { refetchAll } = useChat(userRefId, chatRefId);

    const sendMessage = () => {
        const newMessageObject = { chat: chatRefId, text: newMessage };
        createMessage.mutate(newMessageObject);
        setNewMessage('');
        refetchAll.mutate(userRefId);
        sendBotMessage();
    }

    const sendBotMessage = () => {
        setTimeout(() => {
            getAPIMessage.mutate(chatRefId);
            refetchAll.mutate(userRefId);
        }, 3000)
    }

    const { editMessage, editMessageMode } = useLocalStore();
    const { updateMessage } = useMessage(chatRefId);

    const updMessage = () => {
        if (editMessage.active) {
            if (newMessage !== '' && newMessage !== editMessage.message.text) {
                updateMessage.mutate({ message_id: editMessage.message._id, updMessage: { text: newMessage, edited: true } });
            } 
            const emptyMessage = {} as IMessage;
            editMessageMode({ active: false, message: emptyMessage });
            setNewMessage('');
        }
    }

    useEffect(() => { if (editMessage.active) setNewMessage(editMessage.message.text) }, [editMessage.active])

    return (
        <div className="footer-chat">
                <textarea value={newMessage} onChange={e => setNewMessage(e.target.value)}
                    onBlur={e => e.target.focus()} className='textarea-chat' placeholder='Type your message'/>
                {
                    !editMessage.active
                    ? <IoSend onClick={() => sendMessage()} className='icon-send'/>
                    : <IoCheckmark onClick={() => updMessage()} className='icon-send'/>
                }
        </div>
    )
}