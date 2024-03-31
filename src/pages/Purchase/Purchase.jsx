import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2'
import dateFormat from "dateformat";
const Purchase = () => {
    const AllFood=useLoaderData()
    const[food,setFood]=useState(AllFood)
    const [ItemQuantity, setItemQuantity] = useState(AllFood.quantity);
    const [itemOrder, setItemOrder] = useState(AllFood.order);
console.log("before",ItemQuantity,itemOrder)
    // const[Unavailable,setUnavailable]=useState(true)
    // console.log(food)
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
    const now = new Date();
    const handlePurchase=()=>{

      if(food.email==email){
        Swal.fire({
          icon: "warning",
          title: "User cannot buy the food that they added by themselves",
          text: "try to buy another item!",
          confirmButtonText: "Cool",
        });
      }
      else if(ItemQuantity==0){
        Swal.fire({
          icon: "warning",
          title: "Unavailable.",
          text: "You cannot buy this!This Product is unavailable now.",
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
            "https://eatlink-server.vercel.app/orderedItem",{
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
                fetch(`https://eatlink-server.vercel.app/updateQuantity/${_id}`, {
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
                    setItemQuantity(updatedQuantity);
                    setItemOrder(updatedOrder) 
                    
                    // if (updatedQuantity === 0) {

                    //   fetch(`https://eatlink-server.vercel.app/makeUnavailable/${_id}`, {
                    //     method: "PATCH",
                    //     headers: {
                    //       "content-type": "application/json",
                    //     },
                    //   })
                    //     .then((res) => res.json())
                    //     .then((data) => {
                    //       // setUnavailable(data);
                    //       console.log("available",data)
                    //       // setItemQuantity(updatedQuantity);
                    //       // setItemOrder(updatedOrder)    
                                             
                    //     });
                    // }
                  });
                Swal.fire({
                  icon: "success",
                  title: "Added Food Successfully",
                  text: "Congratulations!",
                  confirmButtonText: "Added",
                });
              }
            });

      
        }
      });
     }
    }
    console.log("after",ItemQuantity,itemOrder)   

    return (
        <div>
        <h2 className="text-3xl italic font-semibold text-center my-5">{food_name}</h2>
      <div className='my-5 flex flex-col md:flex-row justify-center'>
      <div className='flex-1'>
       <img src={img}
       className='w-full object-cover'
       alt="" />
       </div>
       <div className='border border-orange-400 mx-5 '></div>
       <div className='flex-1 space-y-3 p-2'>
        <h3 className="text-xl"><span className='font-bold'>Buyer Name :</span> {user.displayName}</h3>
        <h3 className="text-xl"><span className='font-bold'>Email :</span> {user.email}</h3>
        <h3 className="text-xl"><span className='font-bold'>Category :</span> {category}</h3>
        <h3 className="text-xl"><span className='font-bold'>Price :</span> ${price}</h3>
        <h3 className="text-xl"><span className='font-bold'>Quantity :</span> {ItemQuantity}</h3>
        <h3 className="text-xl"><span className='font-bold'>Order :</span> {itemOrder}</h3>
        <h3 className="text-xl"><span className='font-bold'>Date :</span> {dateFormat(now)}</h3>
       <div className='flex flex-col lg:flex-row gap-3 justify-start items-center'>
       
       
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