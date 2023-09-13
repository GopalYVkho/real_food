import {IMG_PATH_URL} from "../config";

const Card = ({cloudinaryImageId, name, cuisines, areaName,user}) => {
    return (
        <div className="p-2 m-2">
            <img className="rounded-md" src={IMG_PATH_URL + cloudinaryImageId} alt="image"/>
            <h2 className="font-bold text-2xl">{name}</h2>
            <p>{cuisines.join(", ")}</p>
            <p>{areaName}</p>
        </div>
    );
};

export default Card;