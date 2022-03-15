import Image from 'next/image'
import { useEffect, useState } from 'react'
const Card = ({ img, header, text }) => {
  const [typingtext, settypingtext] = useState()
  var typingtextC = ''
  useEffect(() => {
    for (var i = 0; i < text.length; i++) {
      setTimeout(() => {
        typingtextC += text[i]
        settypingtext(typingtextC)
      }, 100 * i)
    }
  }, [])

  return (
    <div id="card" className={`w-[95vw] min-h-[3rem]  mt-10 sm:w-[60vw] md:w-[45vw] p-6 ${img}
     max-w-[100vw] sm:ml-[3vw] lg:w-[30vw] ml-0 block z-30 lg:inline-block `}>
      <h1 className='text-white text-4xl typing w-fit inline-block'>{header}</h1>
      <p id="card-text" className='text-white text-3xl '>{typingtext}
        <span className='text-red-800'>|</span></p>
    </div>
  )
}
export default Card