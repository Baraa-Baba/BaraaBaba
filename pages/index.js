import { useEffect } from 'react';
import dynamic from 'next/dynamic'
const Jet = dynamic(() => import('../components/jet'))
const Introdution = dynamic(() => import('../components/Introdution'))
const About = dynamic(() => import('../components/About.jsx'))
const Projects = dynamic(() => import('../components/projects.jsx'))
export default function App({ loading }) {
  useEffect(() => {
    window.scrollTo(0, document.body.clientHeight)
  }, [])
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, document.body.clientHeight)
    }, 1000)
  }, [loading])
  return <div className="space pb-10">
    <Jet />
    <Projects />
    <About />
    <Introdution />
  </div>;
}