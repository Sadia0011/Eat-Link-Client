import React from 'react';
import { Link } from 'react-router-dom';

const TopSingleProduct = ({top}) => {
    const {_id,food_name,img,category,price,quantity,order}=top;
    return (
        <div>
            
        <div className="w-full h-[350px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='h-1/2'>
                <img className="p-2 rounded-lg w-full h-full object-cover" src={img} alt="food image" />
            </div>
            <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{food_name}</h5>       
                    <h5 className="text-xl  font-semibold tracking-tight text-gray-900 dark:text-white"><span className='text-orange-800'>Category :</span> {category}</h5>       
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"><span className='text-orange-800'>Quantity :</span> {quantity}</h5>       
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"><span className='text-orange-800'>Order :</span> {order}</h5>       
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">${price}</h2>
                 <Link to={`/allfooditems/${_id}`}>
                 <button 
                    className="text-white bg-orange-400 
                    hover:bg-orange-800 focus:ring-4 focus:outline-none 
                    focus:ring-blue-300 font-medium rounded-lg text-sm 
                    px-5 py-2.5 text-center dark:bg-orange-600 
                    dark:hover:bg-orange-400
                    dark:focus:ring-orange-800">Details</button>
                 </Link>
                </div>
            </div>
        </div>
        
                </div>
    );
};

export default TopSingleProduct;