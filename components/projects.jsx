import Image from 'next/image'
import { useEffect, useState } from 'react'
import hangmanss from '../assets/hangman.png'
import todolist from '../assets/todolist.png'
import imageeditorimg from '../assets/imageeditor.png'
import scrollimage from '../assets/scroll.png'
import port from '../assets/por.png'
import furnWebsite from '../assets/portfilioProjectsImages/furnWebsite.png'
import portfilioWebsite from '../assets/portfilioProjectsImages/portfilioWebsite.png'
import hangmanWebsite from '../assets/portfilioProjectsImages/hangmanWebsite.png'
import the3dWebsite from '../assets/portfilioProjectsImages/3dWebsite.png'
import ImageEditorWebsite from '../assets/portfilioProjectsImages/imageEditor.png'
import spacePortfiliodesktop from '../assets/spacePortfiliodesktop.png'
import Pokemonimg from '../assets/poke-pagnation.png' 
import { Carousel } from 'react-responsive-carousel';
const Projects = () => {
    const [hangman_desc, sethangman_desc] = useState(false)
    const [todo_desc, settodo_desc] = useState(false)
    const [imageeditor, setimageeditor] = useState(false)
    const [Pokemon, setPokemon] = useState(false);
    const [yousafzai, setyousafzai] = useState(false);
    const [portfilio, setportfilio] = useState(false)
    const [furn, setfurn] = useState(false)
    const [isMobile,setIsMobile]=useState(false)
    const [scrollwebsite, setscrollwebsite] = useState(false)
    const [width, setwidth] = useState(0);
    useEffect(() => { 
    function handleResize() {
        setIsMobile(window.innerWidth <= 860);
      }
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Call handleResize initially to set the initial state
      handleResize();
  
      // Remove event listener on cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
      };
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
                          {!isMobile ?  <Image layout='intrinsic' src={port} alt='portfolio website image' />
                          :<Image layout='fill' src={portfilioWebsite} alt='portfolio website image' />
                          }
                        </div>
                        {portfilio && <div id='margin_1' className='project-desc-cont'>
                            <h3 className='text-white text-5xl'>Description:</h3>
                            <p className='project-desc-text'>
                               My personal portfolio website showcases my skills and experience through a unique, space-themed design. 
                               The website is navigated via a visually engaging jet  it is constantly evolving platform is dedicated to demonstrating my expertise and capabilities in these technologies. 
                               I am committed to continually improving the website and its contents, as a representation of my passion for web development and                                        dedication to my craft.

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
                      {!isMobile?  <iframe id='margin_000' className="project-iframe"
                            src="https://furn-eight.vercel.app/">
                        </iframe>: <Image layout='fill' src={furnWebsite} />
                        }
                        {furn && <div id='margin_1' className='project-desc-cont'>
                            <h3 className='text-white text-5xl'>Description:</h3>
                            <p className='project-desc-text'>
                               The website is a dynamic platform designed using HTML and CSS, and later converted to Next.js. The implementation of the add-to-cart feature and cart view mode enhances the user experience. Additionally, the development of an admin page that generates JSON data enables efficient management of products, making it easier for users to browse and purchase products
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
                    {!isMobile ?    <iframe id='margin_000' className="project-iframe"
                            src="https://baraa-baba.github.io/hangman-game/">
                        </iframe> : <Image layout='fill' src={hangmanWebsite} />}
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
                       {!isMobile ? <iframe id='margin_0' className="project-iframe"
                            src="https://baraa-baba.github.io/image-editor/">
                        </iframe>: <Image layout='fill' src={ImageEditorWebsite} />}
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
                       {!isMobile ? <Image src={spacePortfiliodesktop} />:
                       <Image src={the3dWebsite}  layout='fill' />}
                        {scrollwebsite && <div id='margin_4' className='project-desc-cont'>
                            <h3 className='text-white text-5xl'>Description:</h3>
                            <p className='project-desc-text'>
                                I designed my this website using Three.js, incorporating a 3D model to demonstrate my skills in this area. Through this project, I greatly improved my 3D design skills and proficiency in Three.js. The website serves as a testament to my technical abilities and creativity, showcasing my ability to produce dynamic, visually engaging designs.
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
