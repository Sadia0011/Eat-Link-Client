import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2'
const Purchase = () => {
    const food=useLoaderData()

    // const[Unavailable,setUnavailable]=useState(true)
    console.log(food)
    const {_id,food_name,order,img,category,price,quantity,made_by,food_origin,description}=food
    console.log(quantity)
    const navigate=useNavigate()
    const {user}=useAuth()
    const email=user.email
    const purchaseProduct={
      food_name,
      img,
      category,
      price,
      quantity,
      email,
      order
    }  
    // console.log(purchaseProduct)

    const handlePurchase=()=>{

      if(food.email==email){
        Swal.fire({
          icon: "warning",
          title: "User cannot buy the food that they added by themselves",
          text: "try to buy another item!",
          confirmButtonText: "Cool",
        });
      }
      else if(quantity==0){
        Swal.fire({
          icon: "warning",
          title: "Unavailable.",
          text: "You cannot buy this!",
          confirmButtonText: "Cool",
        });
      }
     else{
      Swal.fire({
        title: "Are you sure?",
        text: "You want to purchase it !.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, add it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(
            "http://localhost:5000/orderedItem",{
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(purchaseProduct),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if ((data.insertedId = 1)) {
                const updatedQuantity = quantity - 1;
                const updatedOrder = order + 1;
                // const updateItem={updatedQuantity,updatedOrder}
                fetch(`http://localhost:5000/updateQuantity/${_id}`, {
                  method: "PATCH",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({ quantity: updatedQuantity ,
                  order:updatedOrder}), 
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                    
                    if (updatedQuantity === 0) {

                      fetch(`http://localhost:5000/makeUnavailable/${_id}`, {
                        method: "PATCH",
                        headers: {
                          "content-type": "application/json",
                        },
                      })
                        .then((res) => res.json())
                        .then((data) => {
                          setUnavailable(data);
                          
                        });
                    }
                  });
                Swal.fire({
                  icon: "success",
                  title: "Added Food Successfully",
                  text: "Congratulations!",
                  confirmButtonText: "Cool",
                });
              }
            });

      
        }
      });
     }
    }


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
        <h3 className="text-xl"><span className='font-bold'>Order :</span> {order}</h3>
       <div className='flex flex-col lg:flex-row gap-3 justify-center items-center'>
       
       
      <button onClick={handlePurchase} className='btn bg-orange-400 text-white'>Purchase</button>
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