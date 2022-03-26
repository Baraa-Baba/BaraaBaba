import { useEffect } from 'react';
import dynamic from 'next/dynamic'
import Introdution from '../components/Introdution'
const Jet = dynamic(() => import('../components/jet'))
const About = dynamic(() => import('../components/About.jsx'))
const Projects = dynamic(() => import('../components/projects.jsx'))
const Contact = dynamic(() => import('../components/Contact.jsx'))
export default function App({ loading }) {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, document.body.clientHeight)
    }, 500)
    setTimeout(() => {
      window.scrollTo(0, document.body.clientHeight)
    }, 1000)
  }, [loading])
  return <div className="space pb-10">
    <Jet />
    <Contact />
    <Projects />
    <About />
    <Introdution />
  </div>;
}