import Jet from '../components/jet.jsx'
import { useEffect } from 'react';
import dynamic from 'next/dynamic'
const Introdution = dynamic(() => import('../components/Introdution'))
const Projects = dynamic(() => import('../components/projects.jsx'))
const About = dynamic(() => import('../components/About.jsx'))
export default function App() {
  useEffect(() => {
    window.scrollTo(0, document.body.clientHeight)
  }, []);
  return <div className="space pb-10">
    <Jet />
    <Projects />
    <About />
    <Introdution />
  </div>;
}