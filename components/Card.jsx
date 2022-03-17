import Image from 'next/image'
import { useEffect, useState } from 'react'
import githubicon from '../assets/icons/github.png'
import twittericon from '../assets/icons/twitter.png'
import devtoicon from '../assets/icons/devtoicon.png'
import freelancericon from '../assets/icons/freelancer_com.jpg'
import mostqelicon from '../assets/icons/mostqel.png'
const Card = ({ img, header, text, links }) => {
  const [typingtext, settypingtext] = useState()
  const [typingfinished, settypingfinished] = useState(false)
  const [icons, seticons] = useState()
  var typingtextC = ''
  var a
  useEffect(() => {
    for (var i = 0; i < text.length; i++) {
      setTimeout(() => {
        if (i == text.length - 1) {
          if (links == 'GTD') {
            seticons(<><a target={'_blank'} rel="noreferrer" title='github' className='mr-[auto]' href="https://github.com/baraa-baba">
              <Image src={githubicon} alt='github icon' height='75' width='75' />
            </a> <a target={'_blank'} title='twitter' rel="noreferrer" className='m-auto'
              href="https://twitter.com/baraa_baba">
                <Image src={twittericon} alt='twitter icon' height='75' width='75' />
              </a>
              <a target={'_blank'} title='dev.to' rel="noreferrer" className='m-auto'
                href="https://dev.to/baraa_baba">
                <Image src={devtoicon} alt='dev.to icon' height='75' width='75' />
              </a>
            </>)
          }
          else if (links == 'FM') {
            seticons(<><a target={'_blank'} rel="noreferrer" title='freelancer' className='mr-[auto]'
              href="https://www.freelancer.com/u/baraa12baba">
              <Image src={freelancericon} alt='freelancer icon' height='75' width='75' />
            </a> <a target={'_blank'} rel="noreferrer" title='mostqel' className='m-auto'
              href="https://mostaql.com/u/Baraa1Baba">
                <Image src={mostqelicon} alt='mostqel icon' height='75' width='75' />
              </a>
            </>)

          }
          settypingfinished(true)
        }
        typingtextC += text[i]
        settypingtext(typingtextC)
      }, 100 * i)
    }
  }, [])

  return (
    <div id="card" className={`w-[95vw] bg-card min-h-[3rem]  mt-10 sm:w-[60vw] md:w-[45vw] p-6 ${img}
     max-w-[100vw] sm:ml-[3vw] lg:w-[30vw] ml-0 block z-30 lg:inline-block `}>
      <h1 className='text-white text-4xl typing w-fit inline-block'>{header}</h1>
      <p className='card-text text-white text-3xl '>{typingtext}
        {!typingfinished ? <span className='text-red-800'>|</span> : null}
      </p>
      <div>{icons}</div>
    </div>
  )
}
export default Card