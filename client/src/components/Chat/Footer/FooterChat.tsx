import './FooterChat.css'
import { IoSend } from "react-icons/io5";
import { useMessage } from '../../../hooks/useMessage';
import { useLocalStore } from '../../../hooks/useLocalStore';
import { useChat } from '../../../hooks/useChat';
import { useState } from 'react';


export default function FooterChat() {

    const [ newMessage, setNewMessage ] = useState('');
    
    const { userRefId, chatRefId } = useLocalStore();
    const { createMessage, getAPIMessage } = useMessage(chatRefId);
    const { refetchAll } = useChat(userRefId, chatRefId);

    const sendMessage = () => {
        const newMessageObject = {
            chat: chatRefId,
            text: newMessage
        };
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

    return (
        <div className="footer-chat">
                <textarea value={newMessage} onChange={e => setNewMessage(e.target.value)}
                    onBlur={e => e.target.focus()} autoFocus className='textarea-chat' placeholder='Type your message'/>
                <IoSend onClick={() => sendMessage()} className='icon-send'/>
        </div>
    )
}