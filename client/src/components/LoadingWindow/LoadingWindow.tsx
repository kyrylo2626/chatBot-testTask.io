import './LoadingWindow.css';
import { AiOutlineLoading } from "react-icons/ai";


export default function LoadingWindow() {


    return (
        <div className='main-modal-window'>
            <div className='wrapper'>
                <AiOutlineLoading className='icon-load' />
            </div>
        </div>
    )
}