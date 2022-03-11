import './styles/app.sass'
import './styles/index.css'
import React, { useState } from 'react';
import Navbar from './components/navbar';
import SideBar from './components/sidebar';
import Modal from './components/modal';

function App() {
  const [width, setWidth] = useState(220)
  const [dragging, setDragging] = useState(false)
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(false)

  const onResize = (event) => {
    if(dragging){
        const X = event.pageX;
        setWidth(X)
    } else {
        
    }
  }

  const close_modal = () => {
    setModal(false)
  }
  
  const open_modal = () => {
    setModal(true)
  }

  return (
    <div onMouseUp={() => { setDragging(false) }} onMouseMove={(event) => { onResize(event) }}  style={{ cursor : dragging ? 'grabbing' : 'pointer' }} className='app'>
      <Navbar/>
      <div className='main' >
        <SideBar open_modal={open_modal} width={width} setDragging={setDragging} />
        {!loading ? <div className="main-content" >
        <h3 className="main-title" >
          Выберите файл... 
          </h3>
          </div>  
         : <div className='main-content'>
             <div class="lds-roller main-title"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
         </div> 
        }
        </div>
        {modal && <Modal close_modal={close_modal} />}
    </div>
  );
}

export default App;
