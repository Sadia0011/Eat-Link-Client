import React from 'react';

const SingleOrderedItem = ({item,handleDelete}) => {
    const{_id,img,food_name,category}=item;
    
    return (
        <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img src={img} alt="image" class="object-cover w-full h-full"/>
  </div>
  <div class="p-6">
    <h6 class="block mb-4  text-base font-semibold  uppercase">{category}</h6>
    <h4 class="block mb-2  text-2xl font-semibold">{food_name}</h4>
   <button onClick={()=>handleDelete(_id)} className='btn bg-orange-400 text-white'>Delete</button>
  </div>
</div>
    );
};

export default SingleOrderedItem;