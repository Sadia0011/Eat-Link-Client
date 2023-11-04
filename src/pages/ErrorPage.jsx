import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate=useNavigate()
    const handleHome=()=>{
        navigate("/")
    }
    return (
        <div className=' min-h-screen flex gap-5  flex-col justify-center items-center'>
            <div className=''>
                <img 
                className='w-[600px] h-[300px] object-cover'
                src="https://i.ibb.co/hXSTJws/error.png" alt="" />
            </div>
            <div>
                <button
                onClick={handleHome}
                className='btn btn-primary bg-orange-400 font-bold'>Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;