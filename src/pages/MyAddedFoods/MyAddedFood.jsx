import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import MyAddedOneFood from './MyAddedOneFood';

const MyAddedFood = () => {
    const [userAddedItem,setUserAddedItem]=useState([])
    const {user}=useAuth()
    useEffect(()=>{
        fetch(`https://eatlink-server.vercel.app/userAddedFood?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setUserAddedItem(data))
    },[user?.email])
   
    return (
        <div>
            <h2 className="text-3xl text-center my-5 italic font-semibold text-orange-400">My Added Food</h2>
        
        <div className='grid mb-5 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                userAddedItem.map(item=><MyAddedOneFood key={item._id} item={item} ></MyAddedOneFood>)
            }
        </div>
        </div>
    );
};

export default MyAddedFood;