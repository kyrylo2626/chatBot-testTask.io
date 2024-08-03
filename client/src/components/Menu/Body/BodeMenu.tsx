import './BodyMenu.css'
import ChatBox from './ChatBox/ChatBox'
import { IoAdd } from "react-icons/io5";
import { useLocalStore } from '../../../hooks/useLocalStore';
import { useRef, useState, useEffect } from 'react';
import { useChat } from '../../../hooks/useChat';
import { IChat } from '../../../interfaces/Chat.interface';


export default function BodyMenu() {

    const { userRefId } = useLocalStore();
    const { searchChat } = useLocalStore();
    const { getChats } = useChat(userRefId);


    const bodyMenuRef = useRef<HTMLDivElement | null>(null);
    const [ isOverflow, setIsOverflow ] = useState(false);

    useEffect(() => {
        const checkOverflow = () => {
            if (bodyMenuRef.current) {
                const hasOverflow = bodyMenuRef.current.scrollHeight > bodyMenuRef.current.clientHeight;
                setIsOverflow(hasOverflow)
            }
        }
            
        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => { window.removeEventListener('resize', checkOverflow) };
    }, []);

    const { toggleModalWindow } = useLocalStore();
    const openCreateWindow = () => toggleModalWindow({ create: true });

    const searchChatAction = (item: IChat) => {
        return item.name.toLowerCase().split(' ').some(element => element.startsWith(searchChat.toLowerCase()))
    }

    
    return (
        <div ref={bodyMenuRef} className={`body-menu ${isOverflow ? 'overflow' : ''}`} id='scrollfield'>
            <div onClick={() => openCreateWindow()} className='body-menu-new-chat'>
                <IoAdd className='icon-new-chat' />
                <label className='body-menu-new-chat-text'>Create new chat</label>
            </div>
            {
                getChats.isSuccess &&
                getChats.data.map(item => ( searchChatAction(item) && <ChatBox chat_id={item._id}/> ))
            }
        </div>
    )
}