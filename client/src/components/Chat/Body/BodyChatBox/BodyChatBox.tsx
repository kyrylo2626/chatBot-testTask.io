import { IMessage } from '../../../../interfaces/Message.interface'
import './BodyChatBox.css'

import { MdEdit, MdDelete } from "react-icons/md";
import { useLocalStore } from '../../../../hooks/useLocalStore';
import { useMessage } from '../../../../hooks/useMessage';



export default function BodyChatBox(props: { message: IMessage }) {

    const { message } = props;

    const TAG = 'body-chatBox';
    const OWN = message.from_bot ? 'in' : 'out'

    const date = new Date(message.updatedAt).toLocaleDateString();
    const time = new Date(message.updatedAt).toLocaleTimeString('en-UA', { hour: 'numeric', minute: 'numeric', hour12: true });

    const { chatRefId, editMessageMode } = useLocalStore();
    const { deleteMessage } = useMessage(chatRefId);

    const removeMessage = () => {
        deleteMessage.mutate(message._id)
    }
    
    return (
        <>
            {
                message &&
                <>
                    <div className={`${TAG} ${TAG}-${OWN}`}>
                        {
                            message.from_bot &&
                                <div className={`${TAG}-image`}>
                                    <img src={`${import.meta.env.VITE_ICONS_PATH}/male.svg`} className='icon-person'/>
                                </div>
                        }
                        <div className={`${TAG}-message ${TAG}-message-${OWN}`}>
                            <div className={`${TAG}-text ${TAG}-text-${OWN}`}>
                                <label>{message.text}</label>
                            </div>
                            <div className={`${TAG}-datetime`}>
                                {
                                    !message.from_bot &&
                                    <>
                                        <MdEdit onClick={() => editMessageMode({ active: true, message: message })} className='icon-upd-msg icon-edit-msg' />&nbsp;
                                        <MdDelete onClick={() => removeMessage()} className='icon-upd-msg icon-delete-msg' />&nbsp;
                                    </>
                                }
                                <label>{`${date} ${time}`}</label>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}