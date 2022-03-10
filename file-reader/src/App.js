import './styles/app.sass'
import './styles/index.css'
import React, { useState } from 'react';
import Navbar from './components/navbar';
import SideBar from './components/sidebar';

function App() {
  const [width, setWidth] = useState(220)
  const [dragging, setDragging] = useState(false)

  const onResize = (event) => {
    if(dragging){
        const X = event.pageX;
        setWidth(X)
    } else {
        
    }
  }


  return (
    <div onMouseUp={() => { setDragging(false) }} onMouseMove={(event) => { onResize(event) }}  style={{ cursor : dragging ? 'grabbing' : 'pointer' }} className='app'>
      <Navbar/>
      <div className='main' >
        <SideBar width={width} setDragging={setDragging} />
        <div className="main-content" >
        <h3 className="main-title" >
          Выберите файл... 
          </h3>
          </div>
        </div>
    </div>
  );
}

export default App;
