import './PopupWindow.css'
import { useEffect, useState } from 'react';
import { useLocalStore } from '../../../../hooks/useLocalStore';
import { useChat } from '../../../../hooks/useChat';
import { ILastMessage } from '../../../../interfaces/Message.interface';


export default function PopupWindow() {

    const [ popupWindow, setPopupWindow ] = useState({ ready: true, pause: false });

    const { userRefId, chatRefId } = useLocalStore();
    const { getLatestMessages } = useChat(userRefId);
    
    const [ newMessage, setNewMessage ] = useState<ILastMessage | null>(null);

    useEffect(() => {
        if (popupWindow.ready && !popupWindow.pause) {
            if (getLatestMessages.data && getLatestMessages.data.length > 0) {
                getLatestMessages.data.forEach((item: ILastMessage) => {
                    if (new Date().valueOf() - new Date(item?.message?.updatedAt).valueOf() <= 10000) {
                        setNewMessage(item);
                        setTimeout(() => {
                            if (!popupWindow.pause) {
                                setNewMessage(null);
                                setPopupWindow({ ready: true, pause: false });
                            }
                        }, 3000)
                    };
                });
            };
        };
    }, [newMessage, getLatestMessages])
    
    
    return (
        <>
        {
            popupWindow.ready &&
            !popupWindow.pause &&
            newMessage &&
            newMessage.message.chat !== chatRefId &&
            newMessage?.message.from_bot &&
            <div className='popup-window' style={{bottom: `${chatRefId ? '14%' : '2.5%'}`}}>
                <div className='popup-window-info'>
                    <div className='popup-window-image'>
                        <img src='../male.svg' className='icon-person'/>
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
