import { useEffect } from 'react';
import dynamic from 'next/dynamic'
import head from 'next/head'
import Introdution from '../components/Introdution'
const Jet = dynamic(() => import('../components/jet'))
const About = dynamic(() => import('../components/About.jsx'))
const Projects = dynamic(() => import('../components/projects.jsx'))
const Contact = dynamic(() => import('../components/Contact.jsx'))
const SocialAccounts = dynamic(() => import('../components/SocialAccounts'))
export default function App({ loading }) {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, document.body.clientHeight)
    }, 500)
    setTimeout(() => {
      window.scrollTo(0, document.body.clientHeight)
    }, 1000)
  }, [loading])
  return <div className="space p-0 m-0">
    <head>
      <title>Baraa Baba</title>
      <meta author='baraa baba'></meta>
      <meta name="description" content="Hi my name is Baraa a frontend developer from lebeneon I love
      programming and learning new things all the time and this is my portfilio website" />
    </head>
    <Jet />
    <Contact />
    <SocialAccounts />
    <Projects />
    <About />
    <Introdution />
  </div>;
}