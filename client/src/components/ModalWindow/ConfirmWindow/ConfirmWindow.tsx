import './ConfirmWindow.css';
import { useLocalStore } from '../../../hooks/useLocalStore';
import { useChat } from '../../../hooks/useChat';


export default function ConfirmWindow() {

    const { modalWindow, toggleModalWindow } = useLocalStore();
    const closeConfirmWindow = () => toggleModalWindow({ delete: false, logout: false })

    const { userRefId, chatRefId, setChatRefId } = useLocalStore();
    const { deleteChat } = useChat(userRefId, chatRefId);

    const deleteChatMode = () => {
        deleteChat.mutate(chatRefId);
        setChatRefId('');
        closeConfirmWindow();
    }

    return (
        <div className='modal-window confirm-window'>
            <div className='modal-window-label confirm-window-label'>
                {
                    modalWindow.delete ? <label>Are you sure you want to delete chat with<br />Alice Freeman?</label>
                    : modalWindow.logout && <label>Are you sure you want to log out?</label>
                }
            </div>
            <div className='confirm-window-footer'>
                <button type='button' className='modal-window-button gray-btn' onClick={() => closeConfirmWindow()}>Cancel</button>
                {
                    modalWindow.delete ? <button type='button' className='modal-window-button red-btn'
                        onClick={() => deleteChatMode()}>Delete</button>
                    : modalWindow.logout && <button type='button' className='modal-window-button red-btn'>Log out</button>
                }
            </div>
        </div>
    )
}