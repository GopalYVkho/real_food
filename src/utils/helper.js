export function filterData(searchVar,restaurants){
    const filterData = restaurants.filter((restaurant)=>
        restaurant?.info?.name?.toLowerCase()?.includes(searchVar.toLowerCase())
    );
    return filterData;
 };