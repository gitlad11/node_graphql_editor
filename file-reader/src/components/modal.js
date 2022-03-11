import React, { useState, useEffect } from 'react'
import FlatButton from './flat_button';

function Modal(props){
    const [animate, setAnimate] = useState(false)

    const closeModal = props.close_modal

    const close = () => {
        setAnimate(false)
        setTimeout(closeModal, 500)
    }

    useEffect(() => {
        setAnimate(true)
    }, [])

    return (
        <div style={animate ? { opacity : 1 } : { opacity : 0 }} className="modal-background" onClick={() => { close() } } >
            <div className="modal" >
                <h4 className='modal-title'>Создать файл</h4>
                <div className="modal-content" >
                    <h5>
                        Название файла
                    </h5>
                    <div className='modal-input'>
                        <input placeholder='название' />
                    </div>
                    <div style={{ width : '100%', height : '100px', display : 'flex', flexDirection : "column", justifyContent : "center" }} >
                        <FlatButton color={'#1c7cfa'} label={"Создать"} onClick={() => { close() } } />
                    </div>
            
                </div>
            </div>
        </div>
    )
}

export default Modal;