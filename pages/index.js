import Jet from '../components/jet'
import { useEffect } from 'react';
import About from '../components/About';
export default function App() {
  useEffect(() => {
    window.scrollTo(0, document.body.clientHeight)
  }, []);
  return <div className=" w-[100vw] h-[700vh] space">
    <Jet />
    <About />
  </div>;
}