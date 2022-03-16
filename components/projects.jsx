import Image from 'next/image'
import imageeditor from '../assets/imageeditor.png'
import todolist from '../assets/todolist.png'
import hangman from '../assets/hangman.png'
const Projects = () => {
    return (
        <div className="text-white">
            <div className='mb-10'>
                <a href="https://baraa-baba.github.io/hangman-game/"
                    target={'about:blank'} className="text-white text-4xl">hangman game</a>
                <a href="" className="text-4xl cursor-pointer rounded-full bg-green-400 ml-5">?</a>
                <iframe className="sm:w-[70vw] h-[70vh] max-w-[100vw] w-[100vw]"
                    src="https://baraa-baba.github.io/hangman-game/">
                    <a href="https://baraa-baba.github.io/hangman-game/" target={'_blank'}>
                        <Image src={hangman} /></a>
                </iframe>
            </div>
            <div className="sm:ml-[30vw] ml-0">
                <a href="https://baraa-baba.github.io/to-do-list/" target={'about:blank'}
                    className="text-white text-4xl">To do list</a>
                <a className="text-4xl bg-green-400 ml-5">?</a>
                <iframe className="sm:w-[70vw] h-[70vh]  mb-10 max-w-[100vw] w-[100vw]"
                    src="https://baraa-baba.github.io/to-do-list/">
                    <a href="https://baraa-baba.github.io/to-do-list/" target={'_blank'}>
                        <Image src={todolist} /></a>
                </iframe></div>
            <div>
                <a href="https://baraa-baba.github.io/image-editor/" target={'about:blank'} className="text-white text-4xl">image editor</a>
                <iframe className="sm:w-[70vw] h-[70vh]  mb-10 max-w-[100vw] w-[100vw]"
                    src="https://baraa-baba.github.io/image-editor/">
                    <a href="https://baraa-baba.github.io/image-editor/" target={'_blank'}>
                        <Image src={imageeditor} /></a>
                </iframe>
            </div>
        </div >
    )
}
export default Projects