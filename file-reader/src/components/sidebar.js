import { useEffect, useState } from "react";
import React from 'react'
import SideBarItem from "./sidebar_item";
import Button from './button.js';
import { get_items, remove_item } from "../api/api.js";

function SideBar(props){
    const width = props.width
    const setDragging = props.setDragging
    const openModal = props.open_modal

    useEffect(() => {
        init_items()    
    },[])

    const init_items = async () => {
        const items = await get_items()
        setItems(items)
    }

    const remove_file = async () => {
        const removed = await remove_item()
        if(removed){
            init_items()
        } else {
            return 
        }
    }


    const [items, setItems] = useState(["text.txt", 'lib.txt'])

    return (
        <div style={{ width : width }} className="sidebar" >

            <div className="navigation" >
            <Button onClick={openModal} icon={'/images/add-white.svg'} color={'#6eb9f2'} label={"создать"} />
            </div>
            <h4 className="files" >Файлы:</h4>
            <div  className='content' >

                <div className='list'>
                    {items.map((item) => {
                        return <SideBarItem title={item} remove_file={remove_file} />
                    })}
                </div>

                <div onMouseDown={() => { setDragging(true) }} className='resize-zone' >

                </div>

            </div>
            </div>
    )
}
export default SideBar;