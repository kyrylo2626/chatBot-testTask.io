import { useRef, useEffect } from 'react';
import { useLocalStore } from '../../../../hooks/useLocalStore';
import { TManageWindow } from '../../Chat';
import './ManageWindow.css'


export default function ManageWindow(props: { manageWindowPack: TManageWindow }) {

    const closeManageWindow = () => props.manageWindowPack.setManageWindow(false);

    const { toggleModalWindow } = useLocalStore();
    const openDeleteWindow = () => { closeManageWindow(); toggleModalWindow({ delete: true }) }
    const openEditWindow = () => { closeManageWindow(); toggleModalWindow({ edit: true }) }

    const manageRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (manageRef.current && !manageRef.current.contains(event.target as Node)) closeManageWindow() };
        
    useEffect(() => { document.addEventListener('mousedown', handleClickOutside);
        return () => { document.removeEventListener('mousedown', handleClickOutside) } }, []);
    
    
    return (
        <>
            {
                props.manageWindowPack.manageWindow &&
                <div ref={manageRef} className="manage-window">
                    <div onClick={() => openEditWindow()} className='manage-window-line line-top'>
                        <label>Edit chat</label>
                    </div>
                    <div onClick={() => openDeleteWindow()} className='manage-window-line line-bottom'>
                        <label>Delete chat</label>
                    </div>
                </div>
            }
        </>
    )
}