import React, { useEffect } from 'react'
import Myname from './Myname'

const Introdution = () => {
    return (
        <>
            <div id="Introdution-cont" className=''>
                <Myname />

            </div>
            <p className='text-white inline-block bg-black max-w-[100vw]  sm:text-3xl absolute bottom-0 sm:right-6 '>
                tip:click or drag the letters</p>
            <p className='text-white w-96 inline-block bg-black max-w-[100vw] sm:text-3xl absolute bottom-20 sm:right-6 
              '>
                tip:use the arrow keys to navigate using the jet</p>
        </>
    )
}

export default Introdution