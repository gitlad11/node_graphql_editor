import { useState } from "react";
import React from 'react'
import SideBarItem from "./sidebar_item";

function SideBar(props){
    const width = props.width
    const setDragging = props.setDragging

    const [items, setItems] = useState(["text.txt", 'lib.txt'])

    return (
        <div style={{ width : width }} className="sidebar" >

            <div className="navigation" >
            
            </div>
            <div  className='content' >

                <div className='list'>
                    {items.map((item) => {
                        return <SideBarItem title={item} />
                    })}
                </div>

                <div onMouseDown={() => { setDragging(true) }} className='resize-zone' >

                </div>

            </div>
            </div>
    )
}
export default SideBar;