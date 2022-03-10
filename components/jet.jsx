import Image from 'next/image'
import jett from '../assets/jet.png'
import fire from '../assets/firefromjet.png'
import { useEffect, useState, useRef } from 'react';
import ControlButtons from './ControlButtons'
const Jet = () => {
    const [jetX, setjetX] = useState(0)
    const [jetY, setjetY] = useState(0)
    const jet = useRef(0)
    useEffect(() => {
        if (innerWidth > 800) {
            setjetX(430)
            setjetY(10)
        } else if (innerWidth > 400) {
            setjetX(200)
            setjetY(100)
        } else if (innerWidth > 200) {
            setjetX(75)
            setjetY(100)
        } else {
            setjetX(0)
            setjetY(100)
        }
    }, [])
    function left() {
        event.preventDefault();
        document.getElementById('jet-body').style.transform = 'rotate(' + (-25) + 'deg)'
        document.getElementById('float').style.animation = "unset"
        const jet_style = getComputedStyle(document.getElementById('jet'))
        if (parseInt(jet_style.left) + jetX > 0) {
            setjetX(jetX - 10)
        }
    }
    function right() {
        event.preventDefault();
        const jet_style = getComputedStyle(document.getElementById('jet'))
        document.getElementById('float').style.animation = "unset"
        document.getElementById('jet-body').style.transform = 'rotate(' + (25) + 'deg)'
        if (parseInt(jet_style.right) - jetX > 0) {
            setjetX(jetX + 10)
        }
    }
    function down() {
        event.preventDefault();
        const jet_style = getComputedStyle(document.getElementById('jet'))
        document.getElementById('float').style.animation = "unset"
        document.getElementById('jet-body').style.transform = 'rotate(' + (180) + 'deg)'
        if (parseInt(jet_style.bottom) - jetY > 0) {
            setjetY(jetY + 10)
        } else {
            window.scrollBy({
                top: 10,
                left: 0,
            });
        }

    }
    function up() {
        if (typeof event !== 'undefined') {
            event.preventDefault()
        }
        document.getElementById('jet-body').style.transform = 'rotate(' + (0) + 'deg)'
        document.getElementById('float').style.animation = "unset"
        const jet_style = getComputedStyle(document.getElementById('jet'))
        if (parseInt(jet_style.top) - jetY < 0) {
            setjetY(jetY - 10)
        } else {
            window.scrollBy({
                top: -10,
                left: 0,
            });
        }
    }
    function onKeyDown(event) {
        if (event.keyCode == 40) {
            down()
        }
        if (event.keyCode == 39) {
            right()
        }

        if (event.keyCode == 37) {
            left()
        }

        if (event.keyCode == 38) {
            up()
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    }, [jetX, jetY])
    function onKeyUp() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
            document.getElementById('jetfire').style.display = 'none'
            document.getElementById('float').style.animation = "float 3s linear infinite alternate"
        }
    }
    useEffect(() => {
        document.addEventListener('keyup', onKeyUp);
        return () => {
            document.removeEventListener('keyup', onKeyUp);
        }
    }, [jetX, jetY])

    return (
        <>
            {/*added this div just to use postion relative */}
            <div role='jet' className='fixed' aria-label='the jet you gonna use to navgate the site use the arrow keys or contral buttons'
                tabIndex={2} id="jet" ref={jet}>
                {/* added div cause Image can't have styles and img don't work*/}
                <div id='jet-body' className='me '>
                    <div className='float' id="float">
                        <Image src={jett} />
                    </div>
                </div>
                <div id="jetfire" className='absolute hidden top-52 z-[-2] right-12'>
                    <Image src={fire} />
                </div>
                <style jsx>{`
            #jet {
                transform: translateY(${jetY}px) translateX(${jetX}px) scale(1);
            }
            @media only screen and (max-width: 800px){
            #jet{
                transform: translateY(${jetY}px) translateX(${jetX}px) scale(0.75); 
            }}
            `}</style>
            </div>
            <ControlButtons up={up} jetY={jetY} setjetY={setjetY} jetX={jetX}
                setjetX={setjetX} />
        </>
    )
}
export default Jet