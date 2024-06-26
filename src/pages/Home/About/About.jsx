import React from 'react';
import {GiFullPizza} from 'react-icons/gi'
import {MdDeliveryDining,MdAddLocationAlt} from 'react-icons/md'
import { Link } from 'react-router-dom';
const About = () => {
    return (
      <div>
         <div className='text-center italic max-w-3xl mx-auto my-5 space-y-2'>
         <h2 className='text-3xl  font-semibold  text-orange-800'>About Us</h2>
          <p className='font-normal'>Discover a world of flavors in every dish. Immerse yourself in a culinary adventure that spans continents and cultures, all in one place.</p>
      
         </div>
         
           <div className='bg-orange-400 p-4 rounded-lg text-center my-10'>
          <div className='grid gap-4 grid-cols-1 lg:grid-cols-3  items-center '>
            <div className='flex flex-col justify-center items-center'>
         <GiFullPizza className='text-6xl'></GiFullPizza>
<p>From sizzling burgers to mouthwatering pastas, and tantalizing
     desserts, relish the flavors that create an unforgettable dining 
     experience.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
         <MdDeliveryDining className='text-6xl'></MdDeliveryDining>
         <p>Experience the convenience of hassle-free doorstep delivery,
             ensuring your favorite dishes reach you hot and fresh. 
             </p>
            </div>
            <div  className='flex flex-col  items-center'>
                <MdAddLocationAlt className='text-6xl'></MdAddLocationAlt>
                <p>Discover our multiple locations and find the nearest 
                    outlet for a delightful dine-in experience. </p>
            </div>
        </div>
        <div className='flex justify-center items-center mt-2'>
            <Link to={"/allFoodItems"}><button className='btn btn-sm bg-orange-700 border-none text-white '>More Info..</button></Link>
      
            </div>
      </div>
      </div>
    );
};

export default About;

