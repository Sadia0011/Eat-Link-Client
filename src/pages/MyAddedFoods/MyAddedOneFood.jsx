import React from 'react';
import { Link } from 'react-router-dom';

const MyAddedOneFood = ({item}) => {
    const{_id,img,food_name,price}=item;
    return (
        <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img src={img} alt="image" class="object-cover w-full h-full"/>
  </div>
  <div class="p-6">
    {/* <h6 class="block mb-4  text-base font-semibold  uppercase">{price}</h6> */}
    <h4 class="block mb-2  text-2xl font-semibold">{food_name}</h4>
   <Link to={`/updateItem`}>
   <button
    className='btn bg-orange-400 text-white'>Update</button>
   </Link>
  </div>
</div>
    );
};

export default MyAddedOneFood;