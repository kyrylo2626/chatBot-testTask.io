import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as messagesReducer } from './options/messages.slice'
import { reducer as modalWindowReducer } from './options/modalWindow.slice'
import { reducer as userRefIdReducer } from './options/userRefId.slice'
import { reducer as chatRefIdReducer } from './options/chatRefId.slice'
import { reducer as searchChatReducer } from './options/searchChat.slice'


const reducers = combineReducers({
  messages: messagesReducer,
  modalWindow: modalWindowReducer,
  userRefId: userRefIdReducer,
  chatRefId: chatRefIdReducer,
  searchChat: searchChatReducer
})

export const store = configureStore({
  reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>
