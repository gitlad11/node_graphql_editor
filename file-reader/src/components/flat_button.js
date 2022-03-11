import React from 'react'

function FlatButton(props){
    const label = props.label
    const color = props.color
    const onClick = props.onClick

    return (
        <div onClick={onClick} style={{ width : "100%", height : "35px", backgroundColor : color }} className="rounded flat-button" >
            {label}
        </div>
    )
}

export default FlatButton;