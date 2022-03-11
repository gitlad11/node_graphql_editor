import React from 'react'


function SideBarItem(props){
    const title = props.title
    const remove_file = props.remove_file

    return (
        <div className="sidebar-item" >
            {title}
            <div></div>
            <div onClick = {() => { remove_file(title) }} className="button">
                <img alt='' width={16} height={16} src={process.env.PUBLIC_URL + '/images/trash.svg'} />
            </div>
            </div>
    )
}
export default SideBarItem;