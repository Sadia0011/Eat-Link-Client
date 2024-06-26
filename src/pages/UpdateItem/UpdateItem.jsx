import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const UpdateItem = () => {
    // const [userAddedItem,setUserAddedItem]=useState([])
    const {user}=useAuth()
    const item=useLoaderData()
    console.log(item)
    

    const handleUpdateFoodItem = (e) => {
        e.preventDefault();
        const form = e.target;
        const img = form.img.value;
        const food_name = form.food_name.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const order = form.order.value;
        const price = form.price.value;
        const description = form.description.value;
        const made_by = form.made_by.value;
        const food_origin = form.food_origin.value;
        const email = user.email;
        const updateItem = {
          img,
          food_name,
          category,
          quantity,
          order,
          price,
          description,
          made_by,
          food_origin,
          email
        };
        console.log(updateItem);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!",
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(
                `https://eatlink-server.vercel.app/updateItem/${item._id}`,
                {
                  method: "PUT",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(updateItem),
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if ((data.modifiedId = 1)) {
                    Swal.fire({
                      icon: "success",
                      title: "updated Product successfully",
                      text: "Congratulations!",
                      confirmButtonText: "Cool",
                    });
                  }
                });
            }
          });
        }
    return (
        <div className="mb-10">
      <h2 className="text-5xl text-orange-400 font-semibold text-center mt-5 mb-7">
        Update a Food Item
      </h2>
      <div className="bg-orange-100 p-5 rounded-2xl">
        <form onSubmit={handleUpdateFoodItem}>
          {/* row 1 */}
          <div className="md:flex mb-6">
          
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-medium text-orange-400">
                  Food Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={item.food_name}
                  placeholder="Food Name"
                  name="food_name"
                  className="input input-bordered w-full mr-4"
                  required
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-medium text-orange-400">
                  Email
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={user?.email}
                  placeholder="Email"
                  name="email"
                  className="input input-bordered w-full"
                  // required
                  readOnly
                />
              </label>
            </div>
          </div>
          {/* row 2 */}
          <div className="md:flex mb-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-medium text-orange-400">
                  Category
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={item.category}
                  placeholder="Category"
                  name="category"
                  className="input input-bordered w-full mr-4"
                  required
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-medium text-orange-400">
                  Quantity
                </span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  placeholder="Quantity"
                  defaultValue={item.quantity}
                  name="quantity"
                  className="input input-bordered w-full mr-2"
                  required
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-medium text-orange-400">
                  Order
                </span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  placeholder="Order"
                  defaultValue={item.order}
                  name="order"
                  className="input input-bordered w-full mr-2"
                  required
                />
              </label>
            </div>
            
          </div>
          {/* row 3 */}
          <div className="md:flex mb-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-medium text-orange-400">
                  Price
                </span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  defaultValue={item.price}
                  placeholder="Price"
                  name="price"
                  className="input input-bordered w-full mr-4"
                  required
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-medium text-orange-400">
                  Food Origin
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={item.food_origin}
                  placeholder="Food Origin"
                  name="food_origin"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          {/* row 4 */}
          <div className="md:flex mb-6">
          <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-medium text-orange-400">
                  Made By
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={item.made_by}
                  placeholder="Made BY"
                  name="made_by"
                  className="input input-bordered w-full mr-4"
                  required
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-medium text-orange-400">
                  Image URL
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={item.img}
                  placeholder="Image URL"
                  name="img"
                  className="input input-bordered w-full mr-4"
                  required
                />
              </label>
            </div>
          </div>
          {/* row 5 */}
          <div className=" mb-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium text-orange-400">
                  Short Description
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={item.description}
                  placeholder="Short Description"
                  name="description"
                  className="input input-bordered w-full mr-4"
                  required
                />
              </label>
            </div>
          </div>
          <button className="w-full btn btn-accent bg-orange-800 text-white">
            Update Item
          </button>
        </form>
      </div>
    </div>
    );
};

export default UpdateItem;