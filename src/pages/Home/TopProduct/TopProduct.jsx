import React, { useEffect, useState } from 'react';
import TopSingleProduct from './TopSingleProduct';
import { Link } from 'react-router-dom';

const TopProduct = () => {
    const[topProduct,setTopProduct]=useState([])
    useEffect(()=>{
        fetch("https://eatlink-server.vercel.app/topProduct")
        .then(res=>res.json())
        .then(data=>setTopProduct(data))
    },[])
    return (
        <div className="container mx-auto">
            <div className='text-center italic max-w-3xl mx-auto my-5 space-y-2'>
         <h2 className='text-3xl  font-semibold  text-orange-800'>Top Food Items</h2>
          <p className='font-normal'>Enjoy the authentic taste of diverse cuisines without leaving your home. Our carefully crafted dishes bring the essence of different cultures to your table.</p>
      
         </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {topProduct.slice(0,6).map(top=><TopSingleProduct
            key={top._id}
            top={top}
            ></TopSingleProduct>)}
            </div>
            <div className='flex justify-center items-center mt-6'>
            <Link to={"/allFoodItems"}><button className='btn bg-orange-400 text-white'>See All</button></Link>
            </div>
        </div>
    );
};

export default TopProduct;