import { useEffect } from 'react';
import Threebg from '../components/ThreeBg.jsx'
import dynamic from 'next/dynamic';
import Introdution from '../components/Introdution'
const Jet = dynamic(() => import('../components/jet'))
const About = dynamic(() => import('../components/About.jsx'))
const Projects = dynamic(() => import('../components/projects.jsx'))
const ContralPanel = dynamic(() => import('../components/ContralPanel.jsx'))
const Contact = dynamic(() => import('../components/Contact.jsx'))


export default function App({ loading }) {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, document.body.clientHeight)
    }, 5000)
  }, [loading])
  return <div className=" p-0 m-0">
    <head>
      <meta name="google-site-verification" content="Pp6HCNnRnfSMweHewGJ8XIWEwCJ_cGOiDa2aOQAKC7w" />
      <title>Baraa Baba</title>
      <meta author='baraa baba'></meta>
      <meta name="Description" content="Hi my name is Baraa a frontend developer from lebeneon I love
      programming and learning new things all the time and this is my portfilio website" />
    </head>
    <Jet />
    <Threebg />
    <div className='absolute'>
      <Contact />
      <ContralPanel />
      <Projects />
      <About />
      <Introdution />
    </div>
  </div>;
}

