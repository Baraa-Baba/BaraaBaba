import Image from 'next/image'
import githubicon from '../assets/icons/github.png'
import twittericon from '../assets/icons/twitter.png'
import devtoicon from '../assets/icons/devtoicon.png'
import freelancericon from '../assets/icons/freelancer_com.jpg'
import mostqelicon from '../assets/icons/mostqel.png'
import { useEffect, useState, useMemo, useRef } from 'react'
const Card = ({ img, header, text, links, index }) => {
  const [typingtext, settypingtext] = useState()
  const [typingfinished, settypingfinished] = useState(false)
  const [icons, seticons] = useState()
  const [runedfunc, setrunedfunc] = useState(false)
  var typingtextC = ''
  function type() {
    if (!runedfunc) {
      setrunedfunc(true)
      for (var i = 0; i < text.length; i++) {
        setTimeout(() => {
          if (i == text.length - 1) {
            settypingfinished(true)
            if (links == 'GTD') {
              seticons(<><a target={'_blank'} tabIndex={6} rel="noreferrer" title='github' className='fade-in mr-[auto]' href="https://github.com/baraa-baba">
                <Image src={githubicon} alt='github  link' height='75' width='75' />
              </a> <a tabIndex={7} target={'_blank'} title='twitter' rel="noreferrer"
                className='m-auto fade-in'
                href="https://twitter.com/baraa_baba">
                  <Image src={twittericon} alt='twitter link' height='75' width='75' />
                </a>
                <a tabIndex={8} target={'_blank'} title='dev.to' rel="noreferrer"
                  className='m-auto fade-in'
                  href="https://dev.to/baraa_baba">
                  <Image src={devtoicon} alt='dev.to  link' height='75' width='75' />
                </a>
              </>)
            }
            else if (links == 'FM') {
              seticons(<><a target={'_blank'} tabIndex={10} rel="noreferrer" title='freelancer'
                className=' fade-in  align-between justify-between'
                href="https://www.freelancer.com/u/baraa12baba">
                <Image src={freelancericon} alt='freelancer icon' height='75' width='75' />
              </a> <a target={'_blank'} tabIndex={11} rel="noreferrer" title='mostqel'
                className='fade-in  align-between justify-between'
                href="https://mostaql.com/u/Baraa1Baba">
                  <Image src={mostqelicon} alt='mostqel icon' height='75' width='75' />
                </a>
              </>)

            }
          }
          typingtextC += text[i]
          settypingtext(typingtextC)
        }, 60 * i)
      }
    }
  }

  const Card = useRef(null)
  const callback = entries => {
    const [entry] = entries
    if (entry.isIntersecting) {
      if (!runedfunc) {
        type()
      }
    }
  }
  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    const currenttarget = Card.current
    if (currenttarget) observer.observe(currenttarget)

    return () => {
      if (currenttarget) {
        observer.unobserve(currenttarget)
      }
    }
  }, [Card, options, runedfunc])
  return (
    <div tabIndex={index} id="card" ref={Card} aria-label={text} className={`w-[95vw] bg-card 
     mr-0 sm:min-h-[20rem]
    mt-10 sm:w-[60vw] sm:w-[45vw] p-6 ${img} 
     max-w-[100vw] sm:ml-[3vw] lg:w-[30vw] ml-0 block z-30 lg:inline-block h-fit`}>
      {/*a trick so I can make all cards's height the same*/}
      <h1 className={`text-white  text-4xl ${header == 'for everyone' && 'pb-3'} typing w-fit mb-5 inline-block`}>
        {header} </h1>
      <p aria-hidden className='card-text text-white text-3xl '>
        {typingtext}
        {!typingfinished ? <span className='text-red-800'>|</span> : null}
      </p>
      <div className='flex justify-between align-between'>{icons}</div>
    </div>
  )
}
export default Card