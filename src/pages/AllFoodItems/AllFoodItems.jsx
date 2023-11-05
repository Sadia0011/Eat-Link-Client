import { useLoaderData } from "react-router-dom";
import FoodItemCard from "./FoodItemCard";


const AllFoodItems = () => {
    const allFoodItems=useLoaderData()
    return (
        <div>
            <h2 className="text-4xl text-orange-400 text-center font-bold italic my-5">Food Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {allFoodItems.map(allFoodItem=><FoodItemCard key={allFoodItem._id} allFoodItem={allFoodItem}></FoodItemCard>)}
        </div>
        </div>
    );
};

export default AllFoodItems;