const Projects = () => {
    return (
        <div className="text-white">
            <div className='mb-10'>
                <a href="https://baraa-baba.github.io/hangman-game/" target={'about:blank'} className="text-white text-4xl">hangman game</a>
                <iframe className="sm:w-[70vw] h-[70vh] max-w-[100vw] w-[100vw]"
                    src="https://baraa-baba.github.io/hangman-game/"></iframe>
            </div>
            <div className="sm:ml-[30vw] ml-0">
                <a href="https://baraa-baba.github.io/to-do-list/" target={'about:blank'} className="text-white text-4xl">To do list</a>
                <iframe className="sm:w-[70vw] h-[70vh]  mb-10 max-w-[100vw] w-[100vw]"
                    src="https://baraa-baba.github.io/to-do-list/"></iframe></div>
            <div>
                <a href="https://baraa-baba.github.io/image-editor/" target={'about:blank'} className="text-white text-4xl">image editor</a>
                <iframe className="sm:w-[70vw] h-[70vh]  mb-10 max-w-[100vw] w-[100vw]"
                    src="https://baraa-baba.github.io/image-editor/"></iframe>
            </div>
        </div >
    )
}
export default Projects