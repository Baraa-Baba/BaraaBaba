import React from 'react';

const Defention = ({ text }) => {
    return (
        <>
            <span className='q rounded-full text-3xl bg-green-400'>?</span>
            <p className='tip hidden absolute bg-white bg-opacity-70 text-3xl text-white'>{text}</p>
            <style jsx>{`
            .q:hover ~ .tip{
                display:inline-block
            }
            `}
            </style>
        </>
    );
}

export default Defention;
