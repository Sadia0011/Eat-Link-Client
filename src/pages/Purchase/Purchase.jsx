import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Purchase = () => {
    const food=useLoaderData()
    const {food_name,img,category,price,quantity,made_by,food_origin,description}=food
    const navigate=useNavigate()
    const {user}=useAuth()
    return (
        <div>
        <h2 className="text-3xl italic font-semibold text-center my-5">{food_name}</h2>
      <div className='my-5 flex flex-col md:flex-row justify-center'>
      <div className='flex-1'>
       <img src={img}
       className='w-full object-cover'
       alt="" />
       </div>
       <div className='border border-orange-400 mx-5'></div>
       <div className='flex-1 space-y-3'>
        <h3 className="text-xl"><span className='font-bold'>Buyer Name :</span> {user.displayName}</h3>
        <h3 className="text-xl"><span className='font-bold'>Email :</span> {user.email}</h3>
        <h3 className="text-xl"><span className='font-bold'>Category :</span> {category}</h3>
        <h3 className="text-xl"><span className='font-bold'>Price :</span> ${price}</h3>
        <h3 className="text-xl"><span className='font-bold'>Quantity :</span> {quantity}</h3>
       <div className='flex flex-col justify-center items-center'>
       <button className='btn bg-orange-400 text-white'>Purchase</button>
       <button
       onClick={()=>{navigate(-1)}}
       className='btn bg-orange-400 text-white'>Back</button>
       <button
       onClick={()=>{navigate("/")}}
       className='btn bg-orange-400 text-white'>Home</button>
       </div>
       </div>
      </div>
    </div>
    );
};

export default Purchase;