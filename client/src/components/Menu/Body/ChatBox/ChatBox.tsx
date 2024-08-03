import './ChatBox.css'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useChat } from '../../../../hooks/useChat';
import { ILastMessage } from '../../../../interfaces/Message.interface';
import { useLocalStore } from '../../../../hooks/useLocalStore';


export default function ChatBox(props: { chat_id: string }) {

    const { userRefId, setChatRefId } = useLocalStore();

    const { getChat, getLatestMessages } = useChat(userRefId, props.chat_id);

    const lastMessage = getLatestMessages.isSuccess && getLatestMessages.data.find(
        (item: ILastMessage) => (item && item.message?.chat === props.chat_id));

    const date = lastMessage ? new Date(lastMessage.message?.updatedAt).toLocaleDateString() : '';
    const time = lastMessage ? new Date(lastMessage.message?.updatedAt).toLocaleTimeString('en-UA', { hour: 'numeric', minute: 'numeric', hour12: true }) : '';

    
    return (
        <div className="chat-box" onClick={() => setChatRefId(props.chat_id)}>
            <div className='chat-box-image'>
                <img src={`${import.meta.env.VITE_ICONS_PATH}/male.svg`} className='icon-person'/>
                <IoCheckmarkCircleOutline className='icon-online' />
            </div>
            <div className='chat-box-info'>
                <label className='chat-box-name'>{getChat.data && getChat.data.name}</label>
                <label className='chat-box-text'>
                    {(lastMessage && lastMessage?.message?.text.length > 80)
                    ? `${lastMessage?.message?.text.slice(0, 80)}...`
                    : lastMessage?.message?.text}
                </label>
            </div>
            <div className='chat-box-datetime'>
                <label className='chat-box-date'>{date}</label>
                <label className='chat-box-time'>{time}</label>
            </div>
        </div>
    )
}