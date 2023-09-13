import {IMG_PATH_URL} from "../config";

const FoodItem = ({imageId, name, category,price}) => {
    return (
        <div className="shadow-lg bg-emerald-400 rounded-md">
            <div className="p-2 m-2">
                <img className="rounded-md" src={IMG_PATH_URL + imageId} alt="image"/>
                <h2 className="font-bold text-2xl">{name}</h2>
                <p>{category}</p>
                <p>price - {price/100}</p>
            </div>
        </div>
    );
};

export default FoodItem;