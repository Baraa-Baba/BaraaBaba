import React, { useEffect, useState } from 'react'
var clicked = false
const ControlButtons = ({ up, setjetY, jetY, jetX, setjetX }) => {
    const [upiv, setupiv] = useState()
    const [downiv, setdowniv] = useState()
    const [rightiv, setrightiv] = useState()
    const [leftiv, setleftiv] = useState()

    var valueup
    var valueright
    function repeatup(event) {
        console.log(event)
        clearInterval(upiv)
        clearInterval(downiv)
        clearInterval(rightiv)
        clearInterval(leftiv)
        valueup = jetY
        document.getElementById('jet-body').style.transform = 'rotate(' + (0) + 'deg)'
        document.getElementById('float').style.animation = "unset"
        setupiv(setInterval(() => {
            const jet_style = getComputedStyle(document.getElementById('jet'))
            if (parseInt(jet_style.top) - valueup < 0) {
                valueup -= 15
                setjetY(valueup)
            } else {
                window.scrollBy({
                    top: -15,
                    left: 0,
                });
            }
        }, 50))
    }
    function repeatdown() {
        clearInterval(upiv)
        clearInterval(rightiv)
        clearInterval(downiv)
        clearInterval(leftiv)
        valueup = jetY
        document.getElementById('jet-body').style.transform = 'rotate(' + (180) + 'deg)'
        document.getElementById('float').style.animation = "unset"
        setdowniv(setInterval(() => {
            const jet_style = getComputedStyle(document.getElementById('jet'))
            if (parseInt(jet_style.bottom) - valueup > 0) {
                valueup += 15
                setjetY(valueup)
            } else {
                window.scrollBy({
                    top: 15,
                    left: 0,
                });
            }
        }, 50))
    }
    function repeatright() {
        clearInterval(upiv)
        clearInterval(downiv)
        clearInterval(rightiv)
        clearInterval(leftiv)
        valueright = jetX
        const jet_style = getComputedStyle(document.getElementById('jet'))
        document.getElementById('float').style.animation = "unset"
        document.getElementById('jet-body').style.transform = 'rotate(' + (25) + 'deg)'
        setrightiv(
            setInterval(() => {
                if (parseInt(jet_style.right) - valueright > 0) {
                    valueright += 10
                    setjetX(valueright)
                }
            }, 50)
        )
    }
    function repeatleft() {
        clearInterval(upiv)
        clearInterval(leftiv)
        clearInterval(downiv)
        clearInterval(rightiv)
        valueright = jetX
        const jet_style = getComputedStyle(document.getElementById('jet'))
        document.getElementById('float').style.animation = "unset"
        document.getElementById('jet-body').style.transform = 'rotate(' + (-25) + 'deg)'
        setleftiv(
            setInterval(() => {
                if (parseInt(jet_style.left) - valueright < 0) {
                    valueright -= 10
                    setjetX(valueright)
                }
            }, 50)
        )
    }
    return (
        <div tabIndex={3} id='control-buttons' role='hold by space so the jet can move or use the arrow keys'
            aria-label='hold by mouse or your finger so the jet can move  or use the arrow keys'
            className='conbuttons-cont z-[10000000]'>
            <input type={'button'} value='<' role="up" alt='up' aria-label='up'
                onMouseDown={(event) => repeatup(event)} onMouseUp={() => {
                    clearInterval(upiv)
                    setTimeout(() => {
                        clearInterval(upiv)
                    }, 4000)
                    document.getElementById('float').style.animation = "float 3s linear infinite alternate"
                }} onTouchStart={() => {
                    repeatup()
                }} onTouchEnd={() => {
                    if (typeof upiv !== 'undefined') {
                        clearInterval(upiv)
                    } else {
                        setTimeout(() => {
                            clearInterval(upiv)
                        }, 4000)
                    }
                    document.getElementById('float').style.animation = "float 3s linear infinite alternate"
                }}
                className="conbuttons block ml-auto mr-auto rotate-90 active:opacity-70 cursor-pointer" />
            <input type={'button'} value='<' aria-label='left'
                onMouseDown={() => repeatleft()} onMouseUp={() => {
                    clearInterval(leftiv)
                    setTimeout(() => {
                        clearInterval(leftiv)
                    }, 4000)
                    document.getElementById('float').style.animation = "float 3s linear infinite alternate"
                }}
                onTouchStart={() => {
                    repeatleft()
                }} onTouchEnd={() => {
                    document.getElementById('float').style.animation = "float 3s linear infinite alternate"
                    clearInterval(leftiv)
                    setTimeout(() => {
                        clearInterval(leftiv)
                    }, 4000)
                }}
                className="conbuttons inline-block active:opacity-70" />
            <input type={'button'} value='>' onMouseDown={() => repeatright()} onMouseUp={() => {
                clearInterval(rightiv)
                setTimeout(() => {
                    clearInterval(rightiv)
                }, 4000)
                document.getElementById('float').style.animation = "float 3s linear infinite alternate"
            }}
                onTouchStart={() => {
                    repeatright()
                }} onTouchEnd={() => {
                    clearInterval(rightiv)
                    setTimeout(() => {
                        clearInterval(rightiv)
                    }, 4000)
                    document.getElementById('float').style.animation = "float 3s linear infinite alternate"
                }}
                aria-label='right' className="conbuttons inline-block active:opacity-70" id='' />
            <input type={'button'} value='<' aria-label='down' className="conbuttons block ml-auto mr-auto rotate-[270deg]
             active:opacity-70"
                onMouseDown={() => repeatdown()} onMouseUp={() => {
                    if (typeof downiv !== 'undefined') {
                        clearInterval(downiv)
                    } else {
                        setTimeout(() => {
                            clearInterval(downiv)
                        }, 4000)
                    }
                    document.getElementById('float').style.animation = "float 3s linear infinite alternate "
                }} onTouchStart={() => {
                    repeatdown()
                }} onTouchEnd={() => {
                    clearInterval(downiv)
                    setTimeout(() => {
                        clearInterval(downiv)
                    }, 4000)
                    document.getElementById('float').style.animation = "float 3s linear infinite alternate"
                }} />
        </div >
    )
}
export default ControlButtons