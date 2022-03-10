import React from 'react'


function SideBarItem(props){
    const title = props.title

    return (
        <div className="sidebar-item" >
            {title}
            </div>
    )
}
export default SideBarItem;