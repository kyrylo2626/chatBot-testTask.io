import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { actions as messagesActions } from '../store/options/messages.slice';
import { actions as modalWindowActions } from '../store/options/modalWindow.slice';
import { actions as userRefIdActions } from '../store/options/userRefId.slice';
import { actions as chatRefIdActions } from '../store/options/chatRefId.slice';
import { actions as searchChatActions } from '../store/options/searchChat.slice';

import { IMessage } from '../interfaces/Message.interface';

import { RootState } from "../store/store";


type TWindow = { create: boolean } | { edit: boolean } | { delete: boolean } | { logout: boolean };


export const useLocalStore = () => {

    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const dispatch = useDispatch();

    const selectMessages = (state: RootState) => state.messages;
    const messages = useTypedSelector(selectMessages);
    const updateMessages = (message: IMessage) => dispatch(messagesActions.updateMessages(message));

    const selectModalWindow = (state: RootState) => state.modalWindow;
    const modalWindow = useTypedSelector(selectModalWindow);
    const toggleModalWindow = (window: TWindow) => dispatch(modalWindowActions.toggleModalWindow(window));

    const selectUserRefId = (state: RootState) => state.userRefId;
    const userRefId = useTypedSelector(selectUserRefId);
    const setUserRefId = (userRefId: string) => dispatch(userRefIdActions.setUserRefId(userRefId));

    const selectChatRefId = (state: RootState) => state.chatRefId;
    const chatRefId = useTypedSelector(selectChatRefId);
    const setChatRefId = (chatRefId: string) => dispatch(chatRefIdActions.setChatRefId(chatRefId));

    const selectSearchChat = (state: RootState) => state.searchChat;
    const searchChat = useTypedSelector(selectSearchChat);
    const setSearchChat = (searchChat: string) => dispatch(searchChatActions.setSearchChat(searchChat));


    return {
        messages, updateMessages,
        modalWindow, toggleModalWindow,
        userRefId, setUserRefId,
        chatRefId, setChatRefId,
        searchChat, setSearchChat
    }

}
