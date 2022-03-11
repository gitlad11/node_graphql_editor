import { useState } from "react"
import React from 'react'

function Button(props){
    const [animated, setAnimated] = useState(false)
    const [animationEnd, setAnimationEnd] = useState(false)

    const icon = props.icon
    const color = props.color
    const label = props.label
    const onClick = props.onClick

    const animate = (anim) => {
        setAnimated(anim)
        setTimeout(animateEnd(anim), 600);
    }

    const animateEnd = (anim) => {
          setAnimationEnd(anim)
    }
    return (
        <div className='button-container' onMouseEnter={()=> {animate(true)}} onMouseLeave={() => { animate(false) }}>
                <div onClick={onClick} className='rounded' style={{ height : "45px", width : animated ? "120px" : "50px", display : "flex", 
                                            justifyContent : "center", alignItems : 'center', backgroundColor : color }} >
                    <img src={process.env.PUBLIC_URL + icon} alt="" height={25} width={25} />
                {animated ? <div style={animationEnd ? { opacity : 1 } : { opacity : 0 }} className="button-text">
                    {label}
                </div>  : <div></div>
                }
                </div>
        </div>
    )
}
export default Button;