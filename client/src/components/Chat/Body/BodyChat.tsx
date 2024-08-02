import { useRef, useEffect } from 'react';
import { useLoading } from '../../../hooks/useLoading';
import { useLocalStore } from '../../../hooks/useLocalStore';
import { useMessage } from '../../../hooks/useMessage';

import './BodyChat.css'

import BodyChatBox from './BodyChatBox/BodyChatBox';



export default function BodyChat() {

    const { checkAPIServerStatus } = useLoading();

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
            {
                !checkAPIServerStatus.isSuccess &&
                <div className='server-api-error'>
                    <a href='https://api.quotable.io/random' target='blank' className='error-link'>
                        Can't connect to https://api.quotable.io/random. Please try later</a>
                </div>
            }
        </>
    )
}