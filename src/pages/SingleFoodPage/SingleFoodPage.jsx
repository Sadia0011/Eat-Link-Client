import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const SingleFoodPage = () => {
    const singleFoodItem=useLoaderData()
    const navigate=useNavigate()
    const {_id,food_name,img,category,price,quantity,made_by,food_origin,description}=singleFoodItem
    
const handlePurchase=(id)=>{

}

    return (
        <div>
            <Helmet>
                <title>Food|{food_name}</title>
            </Helmet>
            <h2 className="text-3xl italic font-semibold text-center my-5">{food_name}</h2>
          <div className='my-5 flex flex-col md:flex-row justify-center'>
          <div className='flex-1'>
           <img src={img}
           className='w-full object-cover'
           alt="" />
           </div>
           <div className='border border-orange-400 mx-5'></div>
           <div className='flex-1 space-y-3'>
            <h3 className="text-xl"><span className='font-bold'>Category :</span> {category}</h3>
            <h3 className="text-xl"><span className='font-bold'>Price :</span> ${price}</h3>
            <h3 className="text-xl"><span className='font-bold'>Quantity :</span> {quantity}</h3>
            <h3 className="text-xl"><span className='font-bold'>Made By :</span> {made_by}</h3>
            <h3 className="text-xl"><span className='font-bold'>Origin:</span> {food_origin}</h3>
            <h3 className="text-xl"><span className='font-bold'>Description:</span> {description}</h3>
           <div className='flex flex-col justify-center items-center'>
           
           <Link to={`/purchase/${_id}`}>
           <button 
           onClick={()=>handlePurchase(_id)}
           className='btn bg-orange-400 text-white'>Order Now</button>
          
           </Link>
            <button
           onClick={()=>{navigate(-1)}}
           className='btn bg-orange-400 text-white'>Back</button>
           </div>
           </div>
          </div>
        </div>
    );
};

export default SingleFoodPage;