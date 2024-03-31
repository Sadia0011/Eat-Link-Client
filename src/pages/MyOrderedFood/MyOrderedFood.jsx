import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import SingleFoodPage from '../SingleFoodPage/SingleFoodPage';
import SingleOrderedItem from './SingleOrderedItem';
import Swal from 'sweetalert2';

const MyOrderedFood = () => {
    const {user}=useAuth();
    const[orderedItems,setOrderedItems]=useState([])
    useEffect(()=>{
        fetch(`https://eatlink-server.vercel.app/orderedItem?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setOrderedItems(data))
    },[user.email])
    // if({orderedItems.length==0}){
    //     <h2 className="text-4xl text-center my-10">You have not ordered any food</h2>
    // }
    const handleDelete=id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://eatlink-server.vercel.app/orderedOneItem/${id}`,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.deletedCount>0){
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your food has been deleted.",
                          icon: "success"
                        });
                        const remaining = orderedItems.filter((item) => item._id != id)
                        setOrderedItems(remaining);
                    }})
                
            }
          });

       
    }
    return (
        <div>
           <h2 className="text-4xl text-center my-10 italic text-orange-400 font-semibold">My ordered Food</h2>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
            {
                orderedItems.map(item=><SingleOrderedItem
                key={item._id}
                item={item}
                handleDelete={handleDelete}
                ></SingleOrderedItem>)
            }
            </div>
        </div>
    );
};

export default MyOrderedFood;