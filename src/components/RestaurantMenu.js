import { useParams } from "react-router-dom";
import { IMG_PATH_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurants from "../utils/useRestaurants";
import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () =>{
    const {resid} = useParams();
    const [restaurant, menuItems] = useRestaurants(resid);
    const dispatch = useDispatch();

    const addFootItem = (item) =>{
        dispatch(addItem(item))
    }


    return (!restaurant)?<Shimmer />:(
        <> 
            <div className="">
            <h1>Restauraent id :{resid}</h1>            
            <h2>{restaurant?.name}</h2>
            <h2>{restaurant?.city}</h2> 
            <h3>Rating:{restaurant?.avgRating}</h3>
            <img src={ IMG_PATH_URL+restaurant?.cloudinaryImageId} alt="Image" />
            </div>

            <div className="flex flex-col">
                {menuItems.map((item) => (
                <div className="menu-item flex items-center" key={item?.id}>
                    <div className="menu-item-details">
                    <h3 className="item-title">{item?.name}</h3>
                    <p className="item-cost">
                        {item?.price > 0
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            }).format(item?.price / 100)
                        : " "}
                    </p>
                    <p className="item-desc">{item?.description}</p>
                    </div>
                    <div className="menu-img-wrapper">
                    {item?.imageId && (
                        <img
                        className="h-24 menu-item-img"
                        src={IMG_PATH_URL + item?.imageId}
                        alt={item?.name}
                        />
                    )}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" 
                    onClick={()=>addFootItem(item)}> ADD +</button>
                    </div>
                </div>
                ))}
            </div>
        </>
    );
}
export default RestaurantMenu;