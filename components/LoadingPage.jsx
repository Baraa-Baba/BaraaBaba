import { useState, useEffect } from "react";

const LoadingPage = () => {
    const [Loading_text, setLoading_text] = useState('Loading')
    useEffect(() => {
        setTimeout(() => {
            setLoading_text('Loading.')
        }, 333)
        setTimeout(() => {
            setLoading_text('Loading..')
        }, 666)
        setTimeout(() => {
            setLoading_text('Loading...')
        }, 1000)
        setInterval(() => {
            setTimeout(() => {
                setLoading_text('Loading.')
            }, 333)
            setTimeout(() => {
                setLoading_text('Loading..')
            }, 666)
            setTimeout(() => {
                setLoading_text('Loading...')
            }, 1000)
            setLoading_text()
        }, 1000);
    }, [])
    return (
        <div className="w-[100vw] h-[100vh] flex bg-gray-700">
            <h1 className='justify-center justify-items-center flex items-center text-4xl text-white'>{Loading_text}</h1>
        </div>
    );
}

export default LoadingPage;