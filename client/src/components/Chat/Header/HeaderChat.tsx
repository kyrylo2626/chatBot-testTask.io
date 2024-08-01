import './HeaderChat.css'
import { IoCheckmarkCircleOutline, IoEllipsisVertical } from "react-icons/io5";
import { TManageWindow } from '../Chat';
import { useLocalStore } from '../../../hooks/useLocalStore';
import { useChat } from '../../../hooks/useChat';


export default function HeaderChat(props: { manageWindowPack: TManageWindow }) {

    const { userRefId, chatRefId } = useLocalStore();
    const { getChat } = useChat(userRefId, chatRefId);

    const toggleManageWindow = () => props.manageWindowPack.setManageWindow(!props.manageWindowPack.manageWindow)

    
    return (
        <div className="header-chat">
            <div className='header-chat-image'>
            <img src='../male.svg' className='icon-person'/>
                <IoCheckmarkCircleOutline  className='icon-online' />
            </div>
            <label className='header-chat-name'>{getChat.isSuccess && getChat.data.name}</label>
            <IoEllipsisVertical onClick={() => toggleManageWindow()} className='icon-manage' />
        </div>
    )
}
