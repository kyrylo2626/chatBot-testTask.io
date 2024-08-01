import './App.css'
import Menu from './components/Menu/Menu'
import Chat from './components/Chat/Chat'
import ModalWindow from './components/ModalWindow/ModalWindow'

function App() {


  return (
    <>
      <div className='app'>
        <Menu />
        <Chat />
      </div>
      <ModalWindow />
    </>
  )
}

export default App
