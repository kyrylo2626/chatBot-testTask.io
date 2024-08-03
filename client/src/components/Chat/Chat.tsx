import './Chat.css'
import HeaderChat from './Header/HeaderChat'
import BodyChat from './Body/BodyChat'
import FooterChat from './Footer/FooterChat'
import ManageWindow from './Body/ManageWindow/ManageWindow'
import { useState } from 'react'
import PopupWindow from './Body/PopupWindow/PopupWindow'
import { useLocalStore } from '../../hooks/useLocalStore'


export type TManageWindow = { manageWindow: boolean, setManageWindow: React.Dispatch<React.SetStateAction<boolean>> }


export default function Chat() {

    const { chatRefId } = useLocalStore();

    const [ manageWindow, setManageWindow ] = useState(false);
    const manageWindowPack = { manageWindow, setManageWindow };

    
    return (
        <>
                <div className="chat">
                    {
                        chatRefId
                        ?
                        <>
                            <HeaderChat manageWindowPack={manageWindowPack} />
                            <BodyChat />
                            <FooterChat />
                        </>
                        :
                        <div className='chat-start'>
                            <label>Select a chat to start messaging</label>
                        </div>
                    }
                </div>
            <PopupWindow />
            <ManageWindow manageWindowPack={manageWindowPack} />
        </>
    )
}