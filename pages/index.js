import { useEffect } from 'react';
import Threebg from '../components/ThreeBg.jsx'
import dynamic from 'next/dynamic';
import Introdution from '../components/Introdution'
import Jet from '../components/jet'
import About from '../components/About.jsx'
import Projects from '../components/projects.jsx'
import ContralPanel from '../components/ContralPanel.jsx'
import Contact from '../components/Contact.jsx'


export default function App({ loading }) {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, document.body.clientHeight)
      window.scrollTo({
        top: parseInt(document.body.clientHeight),
        behavior: 'smooth',
      });
    }, 5000)
  }, [])
  return <div className=" p-0 m-0">
    <head>
      <meta name="google-site-verification" content="Pp6HCNnRnfSMweHewGJ8XIWEwCJ_cGOiDa2aOQAKC7w" />
      <title>Baraa Baba</title>
      <meta author='baraa baba'></meta>
      <meta name="Description" content="Hi my name is Baraa a frontend developer from Lebanon I love
      programming and learning new things all the time and this is my portfilio website" />
    </head>
    <div className='absolute'>
      <Jet />
      <Threebg />
      <Contact />
      <ContralPanel />
      <Projects />
      <About />
      <Introdution />
    </div>
  </div>;
}

