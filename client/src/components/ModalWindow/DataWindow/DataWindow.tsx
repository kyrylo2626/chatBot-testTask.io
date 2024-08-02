import './DataWindow.css';
import { useLocalStore } from '../../../hooks/useLocalStore';
import { IoClose } from "react-icons/io5";
import { useChat } from '../../../hooks/useChat';
import { useState } from 'react';



export default function DataWindow() {

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');

    const { modalWindow, toggleModalWindow } = useLocalStore();
    const closeDataWindow = () => toggleModalWindow({ create: false, edit: false })

    const { userRefId, chatRefId, setChatRefId } = useLocalStore();
    const { createChat, updateChat } = useChat(userRefId, chatRefId);

    const createChatMode = async () => {
        if (modalWindow.create) {
            const newChat = { user: userRefId, name: `${firstName} ${lastName}` };
            const newChatObject = await createChat.mutateAsync(newChat);
            setChatRefId(newChatObject.data._id);
            closeDataWindow();
        }
    }

    const editChatMode = () => {
        if (modalWindow.edit) {
            const updChat = { name: `${firstName} ${lastName}` };
            updateChat.mutate({ chat_id: chatRefId, updChat: updChat });
            closeDataWindow();
        }
    }


    return (
        <div className='modal-window data-window'>
            <div className='data-window-header'>
                <IoClose onClick={() => closeDataWindow()} className='icon-close' />
            </div>
            <div className='modal-window-label data-window-label'>
                {
                    modalWindow.create ? <label>Create new chat</label>
                    : modalWindow.edit && <label>Edit chat data</label>
                }
            </div>
            <div className='data-window-line'>
                <label>First name:</label>
                <input value={firstName} onChange={e => setFirstName(e.target.value)} type='text'
                    className='data-window-input' placeholder='Type first name' />
            </div>
            <div className='data-window-line'>
                <label>Last name:</label>
                <input value={lastName} onChange={e => setLastName(e.target.value)} type='text'
                    className='data-window-input' placeholder='Type last name' />
            </div>
            <div className='data-window-footer'>
                {
                    modalWindow.create ? <button type='button' className='modal-window-button gray-btn'
                        onClick={() => createChatMode()}>Create</button>
                    : modalWindow.edit && <button type='button' className='modal-window-button gray-btn'
                        onClick={() => editChatMode()}>Edit</button>
                }
            </div>

        </div>
    )
}