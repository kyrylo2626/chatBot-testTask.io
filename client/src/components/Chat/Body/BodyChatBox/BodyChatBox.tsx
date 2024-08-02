import { IMessage } from '../../../../interfaces/Message.interface'
import './BodyChatBox.css'


export default function BodyChatBox(props: { message: IMessage }) {

    const { message } = props;

    const TAG = 'body-chatBox';
    const OWN = message.from_bot ? 'in' : 'out'

    const date = new Date(message.updatedAt).toLocaleDateString();
    const time = new Date(message.updatedAt).toLocaleTimeString('en-UA', { hour: 'numeric', minute: 'numeric', hour12: true });
    
    return (
        <>
            {
                message &&
                <>
                    <div className={`${TAG} ${TAG}-${OWN}`}>
                        {
                            message.from_bot &&
                                <div className={`${TAG}-image`}>
                                    <img src='../male.svg' className='icon-person'/>
                                </div>
                        }
                        <div className={`${TAG}-message ${TAG}-message-${OWN}`}>
                            <div className={`${TAG}-text ${TAG}-text-${OWN}`}>
                                <label>{message.text}</label>
                            </div>
                            <label className={`${TAG}-datetime`}>{`${date} ${time}`}</label>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
