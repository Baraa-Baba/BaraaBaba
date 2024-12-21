import React, { useState } from 'react';

const ControlButtons = ({ up, setjetY, jetY, jetX, setjetX }) => {
    const [upiv, setupiv] = useState();
    const [downiv, setdowniv] = useState();
    const [rightiv, setrightiv] = useState();
    const [leftiv, setleftiv] = useState();

    let valueup;
    let valueright;

    function repeatup() {
        clearInterval(upiv);
        clearInterval(downiv);
        clearInterval(rightiv);
        clearInterval(leftiv);
        valueup = jetY;
        document.getElementById('jet-body').style.transform = 'rotate(0deg)';
        
        document.getElementById('float').style.animation = "unset"
        setupiv(
            setInterval(() => {
                const jet_style = getComputedStyle(document.getElementById('jet'));
                if (parseInt(jet_style.top) - valueup < 0) {
                    valueup -= 30;
                    setjetY(valueup);
                } else {
                    window.scroll({
                        top: window.scrollY - 30, 
                      }); 
                      
                    // window.scrollBy({ top: -15 });
                }
            }, 30)
        );
    }

    function repeatdown() {
        clearInterval(upiv);
        clearInterval(downiv);
        clearInterval(rightiv);
        clearInterval(leftiv);
        valueup = jetY;
        document.getElementById('jet-body').style.transform = 'rotate(180deg)';
        document.getElementById('float').style.animation = "unset"

        setdowniv(
            setInterval(() => {
                const jet_style = getComputedStyle(document.getElementById('jet'));
                if (parseInt(jet_style.bottom) - valueup > 0) {
                    valueup += 15;
                    setjetY(valueup);
                } else {
                    window.scroll({
                        top: window.scrollY + 30, 
                      }); 
                }
            }, 30)
        );
    }

    function repeatright() {
        clearInterval(upiv);
        clearInterval(downiv);
        clearInterval(rightiv);
        clearInterval(leftiv);
        valueright = jetX;
        document.getElementById('jet-body').style.transform = 'rotate(25deg)';
        document.getElementById('float').style.animation = "unset"
        setrightiv(
            setInterval(() => {
                const jet_style = getComputedStyle(document.getElementById('jet'));
                if (parseInt(jet_style.right) - valueright > 0) {
                    valueright += 10;
                    setjetX(valueright);
                }
            }, 30)
        );
    }

    function repeatleft() {
        clearInterval(upiv);
        clearInterval(leftiv);
        clearInterval(downiv);
        clearInterval(rightiv);
        valueright = jetX;
        document.getElementById('jet-body').style.transform = 'rotate(-25deg)';
        document.getElementById('float').style.animation = "unset"
        setleftiv(
            setInterval(() => {
                const jet_style = getComputedStyle(document.getElementById('jet'));
                if (parseInt(jet_style.left) - valueright < 0) {
                    valueright -= 10;
                    setjetX(valueright);
                }
            }, 30)
        );
    }

    const arrowStyle = "flex justify-center ml-auto mr-auto active:opacity-70 cursor-pointer";
    const arrowSVGs = {
        up: (
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="grey" />
                <path d="M12 5L7 10H17L12 5Z" fill="white" />
            </svg>
        ),
        down: (
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="grey" />
                <path d="M12 19L7 14H17L12 19Z" fill="white" />
            </svg>
        ),
        right: (
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="grey" />
                <path d="M19 12L14 7V17L19 12Z" fill="white" />
            </svg>
        ),
        left: (
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="grey" />
                <path d="M5 12L10 7V17L5 12Z" fill="white" />
            </svg>
        )
    };
    function returnToFloating(){
        document.getElementById('float').style.animation = "float 3s linear infinite alternate"
    }
    return (
        <div id="control-buttons" className="conbuttons-cont z-[10000000]">
            <div
                onMouseDown={repeatup}
                onMouseUp={() => {
                    clearInterval(upiv)
                    returnToFloating()
                }}
                onTouchStart={repeatup}
                onTouchEnd={() => {
                    clearInterval(upiv)
                    returnToFloating()
                }}
                className={`${arrowStyle}`}
                aria-label="up"
            >
                {arrowSVGs.up}
            </div>
            <div className="horizontalControlCont flex flex-row">
                <div
                    onMouseDown={repeatleft}
                    onTouchEnd={() => {
                        clearInterval(leftiv)
                        returnToFloating()
                    }}
                    onTouchStart={repeatleft}
                    onMouseUp={() => {
                        clearInterval(leftiv)
                        returnToFloating()
                    }}
                    className={`${arrowStyle}`}
                    aria-label="left"
                >
                    {arrowSVGs.left}
                </div>
                <div
                    onMouseDown={repeatright} 
                    onTouchEnd={() => {
                        clearInterval(rightiv)
                        returnToFloating()
                    }} 
                    onMouseUp={() => {
                        clearInterval(rightiv)
                        returnToFloating()
                    }}
                    onTouchStart={repeatright} 
                    className={`${arrowStyle}`}
                    aria-label="right"
                >
                    {arrowSVGs.right}
                </div>
            </div>
            <div
                onMouseDown={repeatdown}
                onTouchEnd={() => {
                    clearInterval(downiv)
                    returnToFloating()
                }} 
                onMouseUp={() => {
                    clearInterval(downiv)
                    returnToFloating()
                }}
                onTouchStart={repeatdown} 
                className={`${arrowStyle}`}
                aria-label="down"
            >
                {arrowSVGs.down}
            </div>
        </div>
    );
};

export default ControlButtons;
