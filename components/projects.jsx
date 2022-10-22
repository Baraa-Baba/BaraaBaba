import Image from 'next/image'
import { useEffect, useState } from 'react'
import hangmanss from '../assets/hangman.png'
import todolist from '../assets/todolist.png'
import imageeditorimg from '../assets/imageeditor.png'
import scrollimage from '../assets/scroll.png'
import port from '../assets/por.png'
import Pokemonimg from '../assets/poke-pagnation.png'
import yousafzaiimg from '../assets/alaimg.png'
import { Carousel } from 'react-responsive-carousel';
const Projects = () => {
    const [hangman_desc, sethangman_desc] = useState(false)
    const [todo_desc, settodo_desc] = useState(false)
    const [imageeditor, setimageeditor] = useState(false)
    const [Pokemon, setPokemon] = useState(false);
    const [yousafzai, setyousafzai] = useState(false);
    const [portfilio, setportfilio] = useState(false)
    const [furn, setfurn] = useState(false)
    const [scrollwebsite, setscrollwebsite] = useState(false)
    const [width, setwidth] = useState(0);
    useEffect(() => {
        setwidth(innerWidth)
        window.addEventListener('resize', (() => {
            setwidth(innerWidth)
        }))
    }, [])
    return (
        <div id='projects' className="carousel-wrapper text-white z-10" >
            <h1 className="text-white text-5xl text-center font-bold">projects</h1>
            <Carousel infiniteLoop dynamicHeight={false} >

                <div id='portfolio' tabIndex={14} className='project-cont'>
                    <a href="https://baraa-baba.vercel.app/"
                        target={'about:blank'} className="text-white text-4xl">portfilio website</a>
                    <button title='click to see description' onClick={() => setportfilio(!portfilio)}
                        className="text-4xl cursor-pointer rounded-full bg-green-400 ml-5">?</button>
                    {/*this is div is to contain the iframe and overlay so the overlay fits perfectly*/}
                    <div className='project-iframe-cont'>
                        <div className='project-image-cont'>
                            <Image layout='intrinsic' src={port} alt='portfolio website image' />
                        </div>
                        {portfilio && <div id='margin_1' className='project-desc-cont'>
                            <h3 className='text-white text-5xl'>Description:</h3>
                            <p className='project-desc-text'>
                                this is my personal portfolio website it is spaced theme the idea is you
                                can navigate the website using a jet there is a lot of things
                                in it and I will always improve it always .

                            </p>
                            <h4 className="text-white text-4xl">Skills:</h4>
                            <p className="text-orange-600 skills">HTML</p>
                            <p className="text-blue-600 skills">CSS</p>
                            <p className="text-blue-400 skills">react</p>
                            <p className="text-blue-700 skills">Tailwind css</p>
                            <p className="text-white skills">Next</p>
                            <p className="text-yellow-800 skills">javascript</p>

                            <h4 className="text-white text-4xl">Useful links:</h4>
                            <a target={'about:blank'} href='https://baraa-baba.vercel.app/' className="useful-links">Website</a>
                            <a target={'about:blank'} href='https://github.com/Baraa-Baba/portfolio-website' className="useful-links">CODE</a>
                            <a target={'about:blank'} href='https://mostaql.com/portfolio/926084' className="useful-links">Arabic description</a>
                            <a target={'about:blank'} href='https://dev.to/baraa_baba/the-start-of-my-portfolio-website-519l' className="useful-links">Blog</a>
                        </div>}
                    </div>
                </div>

                <div id='furn' tabIndex={14} className='project-cont'>
                    <a href="https://furn-eight.vercel.app/"
                        target={'about:blank'} className="text-white text-4xl">furn website</a>
                    <button title='click to see description' onClick={() => setfurn(!furn)}
                        className="text-4xl cursor-pointer rounded-full bg-green-400 ml-5">?</button>
                    {/*this is div is to contain the iframe and overlay so the overlay fits perfectly*/}
                    <div className='project-iframe-cont'>
                        <iframe id='margin_000' className="project-iframe"
                            src="https://furn-eight.vercel.app/">
                        </iframe>
                        {furn && <div id='margin_1' className='project-desc-cont'>
                            <h3 className='text-white text-5xl'>Description:</h3>
                            <p className='project-desc-text'>
                                the role I played :
                                converted project from HTML to next js it taught we How complicated it is actually to do that
                                 I had to change the link, script the comments install libraries instead
                                of using script etc... also
                                I added the add to cart feature
                                added cart view mode and developed admin page that genrate json and used that json data to add products and blog and moree...

                            </p>
                            <h4 className="text-white text-4xl">Skills:</h4>
                            <p className="text-orange-600 skills">HTML</p>
                            <p className="text-blue-600 skills">CSS</p>
                            <p className="text-blue-400 skills">react</p>
                            <p className="text-white skills">Next</p>
                            <p className="text-green-500 skills">Owl carousel  </p>
                            <p className="text-yellow-800 skills">javascript</p>

                            <h4 className="text-white text-4xl">Useful links:</h4>
                            <a target={'about:blank'} href='https://furn-eight.vercel.app/' className="useful-links">Website</a>
                        </div>}
                    </div>
                </div>

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
                        {hangman_desc && <div id='margin_1' className='project-desc-cont'>
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
                            <div id='margin_3' className='project-desc-cont'>
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
           

                <div id='3d-project' tabIndex={20} className="project-cont">
                    <a href="https://baraa-baba.github.io/3d-scroll-portfilio/" target={'about:blank'}
                        className="text-white text-4xl">3D portfilio website</a>
                    <button title='click to see description' onClick={() => setscrollwebsite(!scrollwebsite)}
                        className="text-4xl bg-green-400 ml-5">?</button>
                    <div className='project-iframe-cont'>
                        <Image src={scrollimage} />
                        {scrollwebsite && <div id='margin_4' className='project-desc-cont'>
                            <h3 className='text-white text-5xl'>Description:</h3>
                            <p className='project-desc-text'>
                                I designed this website using three js It is my portfolio with 3d model added in it I really improved my 3d design skill and three js
                            </p>
                            <h4 className="text-white text-4xl">Skills:</h4>
                            <p className="text-orange-600 skills">HTML</p>
                            <p className="text-blue-600 skills">CSS</p>
                            <p className="text-yellow-800 skills">javascript</p>
                            <p className="text-green-400 skills">Three js</p>
                            <h4 className="text-white text-4xl">Useful links:</h4>
                            <a target={'about:blank'} href="https://github.com/Baraa-Baba/3d-scroll-portfilio"
                                className="useful-links">CODE</a>
                            <a target={'about:blank'} href="https://baraa-baba.github.io/3d-scroll-portfilio/" className="useful-links">Website</a>
                            <a target={'about:blank'} href="https://mostaql.com/portfolio/967248" className="useful-links">Arabic description</a>
                        </div>}
                    </div>
                </div>
            </Carousel>
        </div >
    )
}
export default Projects
