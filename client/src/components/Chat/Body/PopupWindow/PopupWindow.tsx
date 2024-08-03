import './PopupWindow.css'
import { useEffect, useRef, useState } from 'react';
import { useLocalStore } from '../../../../hooks/useLocalStore';
import { useChat } from '../../../../hooks/useChat';
import { ILastMessage } from '../../../../interfaces/Message.interface';


export default function PopupWindow() {

    const { userRefId, chatRefId, setChatRefId } = useLocalStore();
    const { getLatestMessages } = useChat(userRefId);
    const [ popupOpacity, setPopupOpacity ] = useState('0');
    
    const [ newMessage, setNewMessage ] = useState<ILastMessage | null>(null);

    const hasRunRef = useRef(false);

    useEffect(() => {
            if (getLatestMessages.data && getLatestMessages.data.length > 0) {
                getLatestMessages.data.forEach((item: ILastMessage) => {
                    if (new Date().valueOf() - new Date(item?.message?.updatedAt).valueOf() <= 10000) {
                        if (!hasRunRef.current) {
                            setNewMessage(item);
                            setTimeout(() => { setPopupOpacity('1') }, 200)
                            setTimeout(() => { setPopupOpacity('0') }, 5800)
                            setTimeout(() => { hasRunRef.current = true; setNewMessage(null) }, 6000)
                            setTimeout(() => { hasRunRef.current = false }, 6500)
                        };
                    };
                });
            };
            
    }, [getLatestMessages])

    
    return (
        <>
        {
            newMessage &&
            newMessage.message.chat !== chatRefId &&
            newMessage?.message.from_bot &&
            <div onClick={() => setChatRefId(newMessage.message.chat)} className='popup-window'
                style={{opacity: popupOpacity, bottom: `${chatRefId ? '13%' : '5%'}`, right: `${chatRefId ? '0.5%' : '1%'}`}}>
                <div className='popup-window-info'>
                    <div className='popup-window-image'>
                        <img src='../../../public/male.svg' className='icon-person'/>
                    </div>
                    <div className='popup-window-data'>
                        <div className='popup-window-name'>
                            <label>{newMessage.chat_name}</label>
                        </div>
                        <div className='popup-window-text'>
                            <label>
                                { (newMessage && newMessage?.message.text.length > 50)
                                ? `${newMessage?.message.text.slice(0, 50)}...`
                                : newMessage?.message.text }
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}