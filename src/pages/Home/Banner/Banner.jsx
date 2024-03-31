import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/7GSCwrs/Spaghetti.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="flex flex-col lg:flex-row gap-3 justify-center items-center max-w-xs lg:max-w-4xl text-white">
          <div className="flex-1 ">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold ">Savoring Success, One Byte at a Time</h1>
            <p className="mb-5">Discover a seamless way to manage your restaurant with our innovative platform.</p>
            <NavLink to="/allFoodItems" className="btn bg-orange-400 text-white">Read More</NavLink>
          </div>
          <div className='flex-1'>
            <img className='block w-full object-cover' src="https://i.ibb.co/Hh0ZD5G/Margherita-Pizza.jpg" alt="" />
          </div>
        </div>
      </div>
 // <img className=' object-cover w-full' src="https://i.ibb.co/7GSCwrs/Spaghetti.jpg" alt="" />
        // <img className='object-cover w-full' src="https://i.ibb.co/g91j5SX/Chicken-Tikka-Masala.jpg" alt="" />
        // <img className=' object-cover w-full' src="https://i.ibb.co/C7jfVfG/Miso-Soup.jpg" alt="" />
        // <img className='object-cover w-full' src="https://i.ibb.co/Hh0ZD5G/Margherita-Pizza.jpg" alt="" />

       
    );
};

export default Banner;