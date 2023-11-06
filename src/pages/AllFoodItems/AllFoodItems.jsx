import { useLoaderData } from "react-router-dom";
import FoodItemCard from "./FoodItemCard";
import { useEffect, useState } from "react";
import "./AllFoodItems.css"
import { Helmet } from "react-helmet";

const AllFoodItems = () => {
    const allFoodItems=useLoaderData()
    const [count,setCount]=useState(0)
    const [foods,setFoods]=useState([])
    const [realFoods,setRealFoods]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/itemsCount")
        .then(res=>res.json())
        .then(data=>setCount(data))
        // console.log({count})
    },[])
   const total=parseInt(count.count)

    const[itemsPerPage,setItemsPerPage]=useState(9)
    const[currentPage,setCurrentPage]=useState(0)
   const numberOfPages=Math.ceil(total/itemsPerPage)
   console.log( numberOfPages)
// const pages=[...Array(numberOfPages).keys()]
// console.log(pages)

const pages=[]
for(let i=0;i < numberOfPages;i++){
pages.push(i)
}
console.log(pages)

    useEffect(() => {
        fetch(`http://localhost:5000/items?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
            setRealFoods(data)
            setFoods(data)})
    }, [currentPage,itemsPerPage]);
console.log(foods)
    const handleItemsPerPage=e=>{
        const val=parseInt(e.target.value);
        console.log(val)
        setItemsPerPage(val)
        setCurrentPage(0)
    }
    const handlePrevPage=()=>{
        if(currentPage>0){
            setCurrentPage(currentPage-1)
        }
    }
    const handleNextPage=()=>{
        if(currentPage<pages.length-1){
            setCurrentPage(currentPage+1)
        }
    }

const handleSearch=e=>{
    e.preventDefault();
    const form=e.target;
    const foodName=e.target.foodName.value.toLowerCase();
    // console.log(foodName)
    if (foodName.trim() !== "") {
        const filteredFoods = allFoodItems.filter(
          food => food.food_name.toLowerCase().includes(foodName)
        );
        setFoods(filteredFoods);
        form.reset();
}
else{
    setFoods(realFoods)
}
}

    return (
        <div>
            <Helmet>
                <title>Eat-Link | All Food</title>
            </Helmet>
            <h2 className="text-4xl text-orange-400 text-center font-bold italic my-5">Food Menu</h2>
      
      <form onSubmit={handleSearch} className="flex mb-5 gap-2">
      <input type="text" name="foodName"  placeholder="Type Food Name" className="input input-bordered input-warning w-full max-w-xs" />
     <button className="btn bg-orange-400 text-white">Search</button>
      </form>
      
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {foods.map(allFoodItem=><FoodItemCard key={allFoodItem._id} allFoodItem={allFoodItem}></FoodItemCard>)}
        </div>


        {/* pagination */}
        <div className='pagination'>
              
              <button onClick={handlePrevPage}>Prev</button>
               {pages.map(page=> <button
               className={currentPage==page ? 'selected' :undefined}
               onClick={()=>setCurrentPage(page)}
                key={page}>{page}</button>)}
                <button onClick={handleNextPage}>Next</button>
              
            <select value={itemsPerPage}
            onChange={handleItemsPerPage}
            >
                <option value="9">9</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
            
            </div>
        </div>
    );
};

export default AllFoodItems;