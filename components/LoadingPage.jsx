import { useState, useEffect } from "react";

const LoadingPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] grid place-items-center bg-gray-700">
      <h1 className='grid place-items-center typing text-6xl text-white'>loading...</h1>
      <style jsx>{`
      .typing {
            font-weight:800;
            text-transform:uppercase;
            position: relative;
            white-space: nowrap;
            max-width: fit-content;
            display: inline-block;
            color:transparent;
            -webkit-text-stroke: 0.1rem white;
          
        
        }
        .typing::before{
          content: 'loading...'  ;
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          color: lightgreen;
          overflow: hidden;
          animation: fill 5s  linear infinite;
        }
        @keyframes fill{
         0%{
            width:0;
            }
          100%{
            width:100%;
          }
        }
        `}</style>
    </div>
  );
}

export default LoadingPage;