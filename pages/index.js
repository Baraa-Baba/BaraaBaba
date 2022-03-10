import Jet from '../components/jet.jsx'
import { useEffect } from 'react';
import dynamic from 'next/dynamic'

const Introdution = dynamic(() => import('../components/Introdution'))
export default function App() {
  useEffect(() => {
    window.scrollTo(0, document.body.clientHeight)
  }, []);
  return <div className=" w-[100vw] h-[50vh] space">
    <Introdution />
    <Jet />
  </div>;
}