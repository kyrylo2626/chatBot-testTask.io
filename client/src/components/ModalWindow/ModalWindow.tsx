import { useLocalStore } from '../../hooks/useLocalStore';
import './ModalWindow.css';
import DataWindow from './DataWindow/DataWindow';
import ConfirmWindow from './ConfirmWindow/ConfirmWindow';


export default function ModalWindow() {

    const { modalWindow, toggleModalWindow } = useLocalStore();

    const modalWindowIsOpen = () => Object.values(modalWindow).some((item) => item)
    const closeModalWindow = () => toggleModalWindow({ create: false, edit: false, delete: false, logout: false })

    return (
        <>
            {
                modalWindowIsOpen() &&
                    <div className='main-modal-window'>
                        <div className='wrapper'>
                            {
                                (modalWindow.create || modalWindow.edit) ? <DataWindow />
                                : (modalWindow.delete || modalWindow.logout) && <ConfirmWindow />
                            }
                            <div className="overlay" onClick={() => closeModalWindow()}></div>
                        </div>
                    </div>
            }
        </>
    )
}