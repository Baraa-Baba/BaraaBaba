import React, { useEffect } from 'react'
var clicked = false
const ControlButtons = () => {

    return (
        <div className='conbuttons-cont'>
            <div className="conbuttons" onClick={() => clicked = true}>
                &#62;
            </div>
            <div className="conbuttons"></div>
            <div className="conbuttons" id=''></div>
            <div className="conbuttons"></div>
        </div >
    )
}
export default ControlButtons