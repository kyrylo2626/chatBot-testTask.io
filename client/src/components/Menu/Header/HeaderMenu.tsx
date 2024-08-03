import './HeaderMenu.css'
import { IoSearch } from "react-icons/io5";
import { IoCheckmarkCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { useLocalStore } from '../../../hooks/useLocalStore';
import { useUser } from '../../../hooks/useUser';



export default function HeaderMenu() {

    const { getUser } = useUser();
    const { userRefId, setUserRefId } = useLocalStore();
    const { searchChat, setSearchChat } = useLocalStore();
    setUserRefId('66a6d309d6471d23caa467fd');
    const user = getUser(userRefId);

    const { toggleModalWindow } = useLocalStore();
    const openLogoutWindow = () => toggleModalWindow({ logout: true });

    
    return (
        <div className="header-menu">
            <div className='header-menu-top'>
                <div className='header-menu-user'>
                    <div className='header-menu-image'>
                        {
                            user.isSuccess 
                            ?
                            <>
                                <img src='../male.svg' className='icon-person'/>
                                {
                                    user.data.online
                                    ? <IoCheckmarkCircleOutline className='icon-online' style={{fontSize: '12pt'}} />
                                    : <IoRemoveCircleOutline className='icon-offline' style={{fontSize: '12pt'}} />
                                }
                            </>
                            :
                            <>
                                <img src='../male.svg' className='icon-person'/>
                                <IoRemoveCircleOutline className='icon-offline' style={{fontSize: '12pt'}} />
                            </>
                        }
                    </div>
                    <div className='header-menu-name'>
                        {
                            user.isSuccess &&
                            <label>{`${user.data.first_name} ${user.data.last_name}`}</label>
                        } 
                    </div>
                </div>
                <button type='button' onClick={() => openLogoutWindow()} className='header-menu-button'>Log out</button>
            </div>
            <div className='header-menu-bottom'>
                <IoSearch className='icon-search'/>
                <input type='text' className='input-menu' placeholder='Search or start new chat'
                    value={searchChat} onChange={e => setSearchChat(e.target.value)}/>
            </div>
        </div>
    )
}
