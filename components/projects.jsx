import Image from 'next/image'
import { useState } from 'react'
const Projects = () => {
    const [hangman_desc, sethangman_desc] = useState(false)
    const [todo_desc, settodo_desc] = useState(false)
    const [imageeditor, setimageeditor] = useState(false)
    return (
        <div className="text-white">
            <div className='mb-10 opacity-90 sm:w-[70vw] relative h-[70vh] max-w-[100vw] w-[100vw]'>
                <a href="https://baraa-baba.github.io/hangman-game/"
                    target={'about:blank'} className="text-white text-4xl">hangman game</a>
                <button onClick={() => sethangman_desc(!hangman_desc)}
                    className="text-4xl cursor-pointer rounded-full bg-green-400 ml-5">?</button>
                {/*this is div is to contain the iframe and overlay so the overlay fits perfectly*/}
                <div className='relative'>
                    <iframe className="sm:w-[70vw] h-[70vh] max-w-[100vw] w-[100vw]"
                        src="https://baraa-baba.github.io/hangman-game/">
                    </iframe>
                    {hangman_desc && <div className='w-[100%] h-[100%] top-0 z-50 left-0 absolute bg-opacity-80 
                    bg-black'>
                        <h3 className='text-white text-5xl'>Description:</h3>
                        <p className='text-white text-2xl'>
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
            <div className="opacity-90 sm:ml-[30vw] ml-0">
                <a href="https://baraa-baba.github.io/to-do-list/" target={'about:blank'}
                    className="text-white text-4xl">To do list</a>
                <button onClick={() => settodo_desc(!todo_desc)}
                    className="text-4xl bg-green-400 ml-5">?</button>
                <div className='relative'>
                    <iframe className="sm:w-[70vw] h-[70vh]  mb-10 max-w-[100vw] w-[100vw]"
                        src="https://baraa-baba.github.io/to-do-list/">
                    </iframe>
                    {todo_desc && <div className='w-[100%] h-[100%] top-0 z-50 left-0 absolute bg-opacity-80 
                    bg-black'>
                        <h3 className='text-white text-5xl'>Description:</h3>
                        <p className='text-white text-2xl'>
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
            <div className='opacity-90 sm:w-[70vw] h-[70vh]  mb-10 max-w-[100vw] w-[100vw]'>
                <a href="https://baraa-baba.github.io/image-editor/" target={'about:blank'} className="text-white text-4xl">image editor</a>
                <button onClick={() => setimageeditor(!imageeditor)}
                    className="text-4xl bg-green-400 ml-5">?</button>
                <div className='relative sm:w-[70vw] h-[70vh]  mb-10 max-w-[100vw] w-[100vw]'>
                    <iframe className="sm:w-[70vw] h-[70vh]  mb-10 max-w-[100vw] w-[100vw]"
                        src="https://baraa-baba.github.io/image-editor/">
                    </iframe>
                    {imageeditor && <div className='w-[100%] h-[100%] top-0 z-50 left-0 absolute bg-opacity-80 
                    bg-black'>
                        <h3 className='text-white text-5xl'>Description:</h3>
                        <p className='text-white text-2xl'>
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
        </div >
    )
}
export default Projects