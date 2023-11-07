import React, { useEffect, useState } from 'react';
import TopSingleProduct from './TopSingleProduct';
import { Link } from 'react-router-dom';

const TopProduct = () => {
    const[topProduct,setTopProduct]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/topProduct")
        .then(res=>res.json())
        .then(data=>setTopProduct(data))
    },[])
    return (
        <div>
            <div className='text-center my-10 italic'>

            <h2 className="text-3xl   font-semibold text-orange-400  ">Top Food Item</h2>
            <p className='font-medium'>Discover a seamless way to manage your restaurant with our innovative platform.</p>
            
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