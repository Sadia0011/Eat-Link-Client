import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <img src="https://i.ibb.co/hXSTJws/error.png" alt="" />
            </div>
            <div>
                <button className='btn btn-primary bg-orange-400 font-bold'>Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;