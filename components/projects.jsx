import Image from 'next/image'
import { useEffect, useState } from 'react'
import hangmanss from '../assets/hangman.png'
import todolist from '../assets/todolist.png'
import imageeditorimg from '../assets/imageeditor.png'

import Pokemonimg from '../assets/poke-pagnation.png'
import yousafzaiimg from '../assets/malalaimg.png'
import { Carousel } from 'react-responsive-carousel';
const Projects = () => {
    const [hangman_desc, sethangman_desc] = useState(false)
    const [todo_desc, settodo_desc] = useState(false)
    const [imageeditor, setimageeditor] = useState(false)
    const [Pokemon, setPokemon] = useState(false);
    const [yousafzai, setyousafzai] = useState(false);
    const [width, setwidth] = useState(0);
    useEffect(() => {
        setwidth(innerWidth)
        window.addEventListener('resize', (() => {
            setwidth(innerWidth)
        }))
    }, [])
    return (
        <div id='projects' className="carousel-wrapper text-white z-10" >
            <Carousel infiniteLoop dynamicHeight={false} >
                <div id='hangman-game' tabIndex={14} className='project-cont'>
                    <a href="https://baraa-baba.github.io/hangman-game/"
                        target={'about:blank'} className="text-white text-4xl">hangman game</a>
                    <button title='click to see description' onClick={() => sethangman_desc(!hangman_desc)}
                        className="text-4xl cursor-pointer rounded-full bg-green-400 ml-5">?</button>
                    {/*this is div is to contain the iframe and overlay so the overlay fits perfectly*/}
                    <div className='project-iframe-cont'>
                        <iframe id='margin_000' className="project-iframe"
                            src="https://baraa-baba.github.io/hangman-game/">
                        </iframe>
                        {hangman_desc && <div className='project-desc-cont'>
                            <h3 className='text-white text-5xl'>Description:</h3>
                            <p className='project-desc-text'>
                                this is a hangman game that I really enjoyed doing and It hade a lot of conditions like not repeating the same letter and more
                            </p>
                            <h4 className="text-white text-4xl">Skills:</h4>
                            <p className="text-orange-600 skills">HTML</p>
                            <p className="text-blue-600 skills">CSS</p>
                            <p className="text-yellow-800 skills">javascript</p>
                            <h4 className="text-white text-4xl">Useful links:</h4>
                            <a target={'about:blank'} href="https://github.com/Baraa-Baba/hangman-game"
                                className="useful-links">CODE</a>
                            <a target={'about:blank'} href='https://baraa-baba.github.io/hangman-game/' className="useful-links">Website</a>
                            <a target={'about:blank'} href="https://mostaql.com/portfolio/897591" className="useful-links">Arabic description</a>
                        </div>}
                    </div>
                </div>
                <div id='to-do-list' tabIndex={20} className="project-cont">
                    <a href="https://baraa-baba.github.io/to-do-list/" target={'about:blank'}
                        className="text-white text-4xl">To do list</a>
                    <button title='click to see description' onClick={() => settodo_desc(!todo_desc)}
                        className="text-4xl bg-green-400 ml-5">?</button>
                    <div className='project-iframe-cont'>
                        <iframe id='margin_00' className="project-iframe"
                            src="https://baraa-baba.github.io/to-do-list/">
                        </iframe>
                        {todo_desc && <div className='project-desc-cont'>
                            <h3 className='text-white text-5xl'>Description:</h3>
                            <p className='project-desc-text'>
                                this is a basic to do list that saves the todos into local storage I have done it a while ago and may make it more advance in the future.
                            </p>
                            <h4 className="text-white text-4xl">Skills:</h4>
                            <p className="text-orange-600 skills">HTML</p>
                            <p className="text-blue-600 skills">CSS</p>
                            <p className="text-yellow-800 skills">javascript</p>
                            <p className="text-blue-400 skills">jQuery</p>
                            <h4 className="text-white text-4xl">Useful links:</h4>
                            <a target={'about:blank'} href="https://github.com/Baraa-Baba/to-do-list"
                                className="useful-links">CODE</a>
                            <a target={'about:blank'} href="https://baraa-baba.github.io/to-do-list/" className="useful-links">Website</a>
                            <a target={'about:blank'} href="https://mostaql.com/portfolio/897566" className="useful-links">Arabic description</a>
                        </div>}
                    </div>

                </div>
                <div id='image-editor' tabIndex={30} className='project-cont'>
                    <a href="https://baraa-baba.github.io/image-editor/" target={'about:blank'} className="text-white text-4xl">image editor</a>

                    <button title='click to see description'
                        onClick={() => setimageeditor(!imageeditor)}
                        className="hover-appear text-4xl bg-green-400 ml-5">?</button>
                    <div className='project-iframe-cont'>
                        <iframe id='margin_0' className="project-iframe"
                            src="https://baraa-baba.github.io/image-editor/">
                        </iframe>
                        {imageeditor &&
                            <div className='project-desc-cont'>
                                <h3 className='text-white text-5xl'>Description:</h3>
                                <p className='project-desc-text'>
                                    This is an image editor that I really enjoy doing it really taught me a lot of stuff about images most importantly aspect ratio
                                </p>
                                <h4 className="text-white text-4xl">Skills:</h4>
                                <p className="text-orange-600 skills">HTML</p>
                                <p className="text-blue-600 skills">CSS</p>
                                <p className="text-yellow-800 skills">javascript</p>
                                <h4 className="text-white text-4xl">Useful links:</h4>
                                <a target={'about:blank'} href="https://github.com/Baraa-Baba/image-editor"
                                    className="useful-links">CODE</a>
                                <a target={'about:blank'} href="https://baraa-baba.github.io/image-editor/" className="useful-links">Website</a>
                                <a target={'about:blank'} href="https://mostaql.com/portfolio/897607" className="useful-links">Arabic description</a>
                            </div>}
                    </div>
                </div>
                <div id=' react Pokémon pagination' tabIndex={30} className='project-cont'>
                    <a href="https://baraa-baba.github.io/React-Pokemon-Pagination/"
                        target={'about:blank'} className="text-white text-4xl">
                        react Pokémon pagination </a>

                    <button title='click to see description'
                        onClick={() => setPokemon(!Pokemon)}
                        className="hover-appear text-4xl bg-green-400 ml-5">?</button>
                    <div className='project-iframe-cont'>
                        <iframe id='margin_00000' className="project-iframe"
                            src="https://baraa-baba.github.io/React-Pokemon-Pagination/">
                            <Image src={Pokemonimg} alt='hangman website screenshot' />
                        </iframe>
                        {Pokemon &&
                            <div className='project-desc-cont '>
                                <h3 className='text-white text-5xl'>Description:</h3>
                                <p className='project-desc-text'>
                                    this is not originally my project I took it from web dev simplified and styled it using a css framework called tailwind css and made the user able to change the limit of the Pokémon name in one page.
                                </p>
                                <h4 className="text-white text-4xl">Skills:</h4>
                                <p className="text-orange-600 skills">HTML</p>
                                <p className="text-blue-600 skills">CSS</p>
                                <p className="text-yellow-800 skills">javascript</p>
                                <p className="text-blue-500 skills">react</p>
                                <h4 className="text-white text-4xl">Useful links:</h4>
                                <a target={'about:blank'} href="https://github.com/Baraa-Baba/React-Pokemon-Pagination"
                                    className="useful-links">CODE</a>
                                <a target={'about:blank'} href="https://baraa-baba.github.io/React-Pokemon-Pagination/"
                                    className="useful-links">Website</a>
                                <a target={'about:blank'} href="https://mostaql.com/portfolio/897576" className="useful-links">Arabic description</a>
                            </div>}
                    </div>
                </div>
                <div id='Malala yousafzai website' tabIndex={30} className='project-cont'>
                    <a href="https://baraa-baba.github.io/Malala-Yousafzai/"
                        target={'about:blank'} className="text-white text-4xl">
                        Malala yousafzai website </a>

                    <button title='click to see description'
                        onClick={() => setyousafzai(!yousafzai)}
                        className="hover-appear text-4xl bg-green-400 ml-5">?</button>
                    <div className='project-iframe-cont'>
                        <iframe id='margin_0000' className="project-iframe"
                            src="https://baraa-baba.github.io/Malala-Yousafzai/">
                            <Image src={yousafzaiimg} width={999} height={999} alt='hangman website screenshot' />
                        </iframe>
                        {yousafzai &&
                            <div className='project-desc-cont '>
                                <h3 className='text-white text-5xl'>Description:</h3>
                                <p className='project-desc-text'>
                                    this is website about the story of Malala Yousafzai made it for a school project the parallax effect and slider made by glide js really improves the website
                                </p>
                                <h4 className="text-white text-4xl">Skills:</h4>
                                <p className="text-orange-600 skills">HTML</p>
                                <p className="text-blue-600 skills">CSS</p>
                                <p className="text-yellow-800 skills">javascript</p>
                                <h4 className="text-white text-4xl">Useful links:</h4>
                                <a target={'about:blank'} href="https://github.com/Baraa-Baba/Malala-Yousafzai"
                                    className="useful-links">CODE</a>
                                <a target={'about:blank'} href="https://baraa-baba.github.io/Malala-Yousafzai/"
                                    className="useful-links">Website</a>
                                <a target={'about:blank'} href="https://mostaql.com/portfolio/937308" className="useful-links">Arabic description</a>
                            </div>}
                    </div>
                </div>
            </Carousel>
            <h1 className="text-white text-5xl text-center font-bold">projects</h1>
        </div >
    )
}
export default Projects