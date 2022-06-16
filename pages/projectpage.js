import React from 'react';
import Projects from '../components/projects';
import bg from '../assets/star.svg'
const Projectpage = () => {
    return (
        <div className="bg">
            <Projects />
            <style jsx>{`
                html{
                    min-height:300vh !important;
                    overflow:scroll !important;
                }
                body,.bg{
    background: black;

                }
                `}</style>
        </div>
    );
}

export default Projectpage;
