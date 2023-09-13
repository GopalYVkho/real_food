import { useState,useEffect } from "react";
import { MENU_DETAILS_URL } from "../config";
const useRestaurants= (resid)=>{

    const [restaurant ,setRestaurant] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    // Use Effect
    useEffect(()=>{
        getRestaurant();
    },[]);

    // Get Api
    async function getRestaurant(){
        const fetch_api = await fetch(MENU_DETAILS_URL+resid);
        const json = await fetch_api.json();
        // RestaurentData
        const restaurantdata = json?.data?.cards?.map(x => x.card)?.find(x => x && x.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")?.card?.info || null;
        setRestaurant(restaurantdata);

        // Set menu item data
        console.log(json?.data?.cards.find(x=> x.groupedCard).groupedCard?.cardGroupMap?.REGULAR.cards.map(x => x.card?.card).filter(x=> x['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory").map(x=> x.itemCards).flat().map(x=> x.card?.info)|| []);
        const menuItemsData = json?.data?.cards.find(x=> x.groupedCard).groupedCard?.cardGroupMap?.REGULAR.cards.map(x => x.card?.card).filter(x=> x['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory").map(x=> x.itemCards).flat().map(x=> x.card?.info)|| [];
        
    //   const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
    //   groupedCard?.cardGroupMap?.REGULAR?.
    //   cards?.map(x => x.card?.card)?.
    //   filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
    //   map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find(x => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      })
      setMenuItems(uniqueMenuItems);


    }

    return [restaurant,menuItems];
};

export default useRestaurants;