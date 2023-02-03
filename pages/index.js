import { useEffect } from 'react';
import dynamic from 'next/dynamic'
import Introdution from '../components/Introdution'
const Jet = dynamic(() => import('../components/jet'))
const About = dynamic(() => import('../components/About.jsx'))
const Projects = dynamic(() => import('../components/projects.jsx'))
const Contact = dynamic(() => import('../components/Contact.jsx'))
const SocialAccounts = dynamic(() => import('../components/SocialAccounts'))
export default function App({ loading }) { 
  return <div className="space p-0 m-0">
    <head>
      <meta name="google-site-verification" content="Pp6HCNnRnfSMweHewGJ8XIWEwCJ_cGOiDa2aOQAKC7w" />
      <title>Baraa Baba</title>
      <meta author='baraa baba'></meta>
      <meta name="Description" content="Hi my name is Baraa a frontend developer from lebeneon I love
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
