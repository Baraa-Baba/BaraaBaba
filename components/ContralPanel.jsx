import { useState, useEffect } from 'react'
import control_panel from '../assets/control_panel.png'
import Image from 'next/image'
const Contralpanel = ({ setjetY }) => {
    const [scrollbarshowed, setscrollbarshowed] = useState(false)
    const [showcontrolpanel, setshowcontrolpanel] = useState(true)
    const [showcontrolbuttons, setshowcontrolbuttons] = useState(true)
    const [isjet_visible, setisjet_visible] = useState(true)
    function handledisplayscrollbar() {
        if (scrollbarshowed) {
            setscrollbarshowed(false)
            document.getElementById('show-scroll-bar').innerText = 'hide scroll bar'
            document.querySelector('html').style.overflowY = 'auto'
        } else {
            setscrollbarshowed(true)
            document.getElementById('show-scroll-bar').innerText = 'show scroll bar'
            document.querySelector('html').style.overflowY = 'hidden'
        }
    }
    function handleshow() {
        if (showcontrolpanel) {
            setshowcontrolpanel(false)
            document.getElementById('control-panel').style.left = '0px'

        } else {
            setshowcontrolpanel(true)
            document.getElementById('control-panel').style.left = '-500px'
        }
    }
    function handlecontrolbuttons() {
        if (showcontrolbuttons) {
            setshowcontrolbuttons(false)
            document.getElementById('showcontrolbuttons').innerText = 'show control buttons'
            document.getElementById('control-buttons').style.display = 'none'

        } else {
            setshowcontrolbuttons(true)
            document.getElementById('showcontrolbuttons').innerText = 'hide control buttons '
            document.getElementById('control-buttons').style.display = 'block'
        }
    }
    function jet_visible() {
        if (isjet_visible) {
            setisjet_visible(false)
            document.getElementById('jet-visible').innerText = 'make jet visible'
            document.getElementById('jet').style.opacity = '0.1'

        } else {
            setisjet_visible(true)
            document.getElementById('jet-visible').innerText = 'make jet invisible '
            document.getElementById('jet').style.opacity = '1'
        }
    }
    function fast_travel(the_place) {
        document.getElementById('jet').style.transitionProperty = 'all'
        document.getElementById('jet').style.transitionDuration = '0.5s'
        document.getElementById('jet-body').style.transitionProperty = 'all'
        document.getElementById('jet-body').style.transitionDuration = '0.2s'
        setTimeout(() => {
            document.getElementById('jet').style.transitionProperty = 'none'
            document.getElementById('jet').style.transitionDuration = '0'
            document.getElementById('jet-body').style.transitionProperty = 'all'
            document.getElementById('jet-body').style.transitionDuration = '2s'
        }, 1500)
        if (document.getElementById('jet').getBoundingClientRect().top >
            document.getElementById(the_place).getBoundingClientRect().top) {
            setjetY(0)
            document.getElementById('jet-body').style.transform = 'rotate(' + (0) + 'deg)'
        } else {
            setjetY(innerHeight - 200)
            document.getElementById('jet-body').style.transform = 'rotate(' + (180) + 'deg)'
        }
        setTimeout(() => {
            document.getElementById(the_place).scrollIntoView({
                behavior: 'smooth'
            });
        }, 300)
    }
    return (
        <>
            <button className='fixed top-[-20px]  left-[-10px] m-0 p-0 z-50' onClick={() => handleshow()}>
                <Image src={control_panel} height='85px' width={'95px'} />  </button>
            <div id='control-panel' className={`h-[100vh] left-[-500px] w-fit  bg-blur z-50 me fixed top-12 bg-white 
            opacity-90 pr-5`}>
                <button className='text-black  block text-2xl sm:text-4xl' id='show-scroll-bar' onClick={() => handledisplayscrollbar()}>show scroll bar</button>
                <button id='showcontrolbuttons' className='text-2xl sm:text-4xl'
                    onClick={() => { handlecontrolbuttons() }}>hide control buttons</button>
                <button id='jet-visible' className='text-2xl sm:text-4xl block'
                    onClick={() => jet_visible()}>make jet invisible</button>
                <div>
                    <h2 className='text-5xl font-extrabold text-cyan-400'>fast travel</h2>
                    <button className='fast_travel_button'
                        onClick={() => fast_travel('contact-me')}>Contact me</button>
                    <button className='fast_travel_button'
                        onClick={() => fast_travel('hangman-game')}>hangman game</button>
                    <button className='fast_travel_button'
                        onClick={() => fast_travel('to-do-list')}>to do list</button>
                    <button className='fast_travel_button'
                        onClick={() => fast_travel('image-editor')}>image editor</button>
                    <button className='fast_travel_button'
                        onClick={() => fast_travel('about-me')}>About me</button>
                    <button className='fast_travel_button'
                        onClick={() => fast_travel('introduction')}>introduction</button>
                </div>
            </div>
        </>
    )
}

export default Contralpanel;
