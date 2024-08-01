import { useRef, useEffect } from 'react';
import { useLocalStore } from '../../../hooks/useLocalStore';
import { useMessage } from '../../../hooks/useMessage';

import './BodyChat.css'

import BodyChatBox from './BodyChatBox/BodyChatBox';



export default function BodyChat() {

    const { chatRefId } = useLocalStore();
    const { getMessages } = useMessage(chatRefId);

    const bodyChatRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => { if (bodyChatRef.current) { bodyChatRef.current.scrollTop = bodyChatRef.current.scrollHeight } };
    useEffect(() => { scrollToBottom() }, [ getMessages ]);

    return (
        <>
            <div className="body-chat" id='scrollfield' ref={bodyChatRef}>
                {
                    (getMessages.data && getMessages.data.length > 0)
                    ? getMessages.data.map(message => ( <BodyChatBox message={message}/> ))
                    :
                    <div className='chat-start'>
                        <label>No message here yet...</label>
                    </div>
                }
            </div>
            
        </>
    )
}