import React from 'react';

const Speciality = () => {
    return (
        <div>
            
            <h2 className='text-3xl text-center font-semibold italic text-orange-800'>Our Speciality</h2>
            <div className='flex flex-col lg:flex-row justify-center items-center my-10 lg:max-w-4xl lg:p-5 mx-auto'>
            <div className='flex-1  '>
            <div className='relative max-w-lg mx-auto'>
            <img className='w-1/2' src="https://i.ibb.co/Hh0ZD5G/Margherita-Pizza.jpg" alt="" />
            <img className='hidden lg:block w-1/3 lg:absolute lg:top-28 lg:left-40' src="https://i.ibb.co/3ygRSnx/Kimchi-Fried-Rice.jpg" alt="" />
            </div>
            </div>
            <div className='flex-1 space-y-5'>
           <p >Discover our specialty dishes crafted with care and precision, 
            each showcasing the essence of culinary excellence. Delight your
             taste buds with our signature flavors and unique gastronomic 
             creations.</p>
            </div>
        </div>
        </div>
    );
};

export default Speciality;