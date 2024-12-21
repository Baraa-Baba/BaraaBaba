import Image from 'next/image'
import jetImage from '../assets/jet.png'
import ContralPanel from './ContralPanel'
import fire from '../assets/firefromjet.png'
import { useEffect, useState, useRef } from 'react';
import ControlButtons from './ControlButtons' 

const Jet = () => {
    useEffect(() => {
        window.scrollTo(0, document.body.clientHeight)
    }, [])  
    const [jetX, setjetX] = useState(0)
    const [jetY, setjetY] = useState(0)
    const jet = useRef(null)
    useEffect(() => {
        if (innerWidth > 800) {
            setjetX(430)
            setjetY(150)
        } else if (innerWidth > 400) {
            setjetX(140)
            setjetY(150)
        } else if (innerWidth > 200) {
            setjetX(140)
            setjetY(150)
        } else {
            setjetX(0)
            setjetY(150)
        }
    }, []) 
    // function repeatFunctionForSpecificTimes(functionBeingRepeated,numberOfTimesFunctionBeingRepeated,event){
    //     for(let i=0;i<numberOfTimesFunctionBeingRepeated;i++)
    //     setTimeout(()=>{
    //         functionBeingRepeated(event)
    //     },100*numberOfTimesFunctionBeingRepeated)
    // }  

function triggerControlButtonEvent(direction,event){
    const ControlButton = document.querySelector(`[aria-label="${direction}"]`);


    if (ControlButton) { 
        const touchStartEvent = new Event(event, {
            bubbles: true,
            cancelable: true,
            composed: true
        });
 
        ControlButton.dispatchEvent(touchStartEvent);
         
        }
} 
function onKeyDown(event) { 
  
    if (event.keyCode === 40) {  
        triggerControlButtonEvent("down","touchstart");
    }
    if (event.keyCode === 39) { 
        triggerControlButtonEvent("right","touchstart");
    }
    if (event.keyCode === 37) { 
        triggerControlButtonEvent("left","touchstart");
    }
    if (event.keyCode === 38) { 
        triggerControlButtonEvent("up","touchstart");
    }

 
    //document.getElementById('jetfire').style.display = 'block'; 
}

function onKeyUp(event) {
    if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) { 
        if (event.keyCode === 40) {  
            triggerControlButtonEvent("down",'touchend');
        }
        if (event.keyCode === 39) { 
            triggerControlButtonEvent("right",'touchend');
        }
        if (event.keyCode === 37) { 
            triggerControlButtonEvent("left",'touchend');
        }
        if (event.keyCode === 38) { 
            triggerControlButtonEvent("up",'touchend');
        }


       // document.getElementById('jetfire').style.display = 'none'; 
    }
}

useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('keyup', onKeyUp);
    };
}, [jetX, jetY]);
 

    useEffect(() => {
        document.addEventListener('keyup', onKeyUp);
        return () => {
            document.removeEventListener('keyup', onKeyUp);
        }
    }, [jetX, jetY])

    return (
        <>
            {/*added this div just to use postion relative */}
            <div role='jet' className='fixed z-[1] opacity-100' aria-label='the jet you gonna use to navigate 
            the site use the arrow keys or contral buttons or just use tab'
                tabIndex={2} id="jet" ref={jet}>
                {/* added div cause Image can't have styles and img don't work*/}
                <div id='jet-body' className='me '>
                    <div className='float' id="float">
                        <Image src={jetImage} />
                    </div>
                </div>
                <div id="jetfire" className='absolute hidden top-52 right-12'>
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
            <ControlButtons   jetY={jetY} setjetY={setjetY} jetX={jetX}
                setjetX={setjetX} />
            <ContralPanel setjetY={setjetY} />
        </>
    )
}
export default Jet