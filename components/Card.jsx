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
    <div className={`w-[100vw] mb-[6rem] min-h-[3rem] md:mb-10 md:w-[30vw] p-6 ${img} max-w-[100vw] ml-[3vw] block z-30 sm:inline-block`}>
      <h1 className='text-white text-4xl typing w-fit inline-block'>{header}</h1>
      <p className='text-white text-3xl '>{typingtext}
        <span className='text-red-800'>|</span></p>
    </div>
  )
}
export default Card