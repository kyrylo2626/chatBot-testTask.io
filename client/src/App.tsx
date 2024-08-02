import './App.css'
import Menu from './components/Menu/Menu'
import Chat from './components/Chat/Chat'
import ModalWindow from './components/ModalWindow/ModalWindow'
import LoadingWindow from './components/LoadingWindow/LoadingWindow'
import { useLoading } from './hooks/useLoading'

function App() {

  const { checkServerStatus } = useLoading();


  return (
    <>
      { !checkServerStatus.isSuccess && <LoadingWindow /> }
      <div className='app'>
        <Menu />
        <Chat />
      </div>
      <ModalWindow />
    </>
  )
}

export default App
