import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
const AddAFood = () => {
  const {user}=useAuth()
    const handleAddFoodItem = (e) => {
        e.preventDefault();
        const form = e.target;
        const img = form.img.value;
        const food_name = form.food_name.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.description.value;
        const made_by = form.made_by.value;
        const food_origin = form.food_origin.value;
        const email = user.email;
        const newItem = {
          img,
          food_name,
          category,
          quantity,
          price,
          description,
          made_by,
          food_origin,
          email
        };
        console.log(newItem);
        fetch(
          "http://localhost:5000/allfooditems",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newItem),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if ((data.insertedId = 1)) {
              Swal.fire({
                icon: "success",
                title: "added Item successfully",
                text: "Congratulations!",
                confirmButtonText: "Cool",
              });
              form.reset()
            }
          });
        }
    return (
        <div className="mb-10">
      <h2 className="text-5xl text-orange-400 font-semibold text-center mt-5 mb-7">
        Add a Food Item
      </h2>
      <div className="bg-orange-100 p-5 rounded-2xl">
        <form onSubmit={handleAddFoodItem}>
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
                  name="quantity"
                  className="input input-bordered w-full"
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
                  placeholder="Short Description"
                  name="description"
                  className="input input-bordered w-full mr-4"
                  required
                />
              </label>
            </div>
          </div>
          <button className="w-full btn btn-accent bg-orange-800 text-white">
            Add Item
          </button>
        </form>
      </div>
    </div>
    );
};

export default AddAFood;