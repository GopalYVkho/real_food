// import { restaurantList } from "../config"
import Card from "./Card";
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import {Link} from "react-router-dom";
import {filterData} from "../utils/helper";
import useOnline from "../utils/useOnline";
import {LISTING_URL} from '../config';

 const Body = () =>{
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filterRestaurans, setFilterRestaurans] = useState([]);
    const [searchVar, setSearchVar] = useState("");

    useEffect(()=>{
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const data = await fetch( LISTING_URL );
        const json = await data.json();
        setAllRestaurants(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurans(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // Online Or NotOnline
    const isOnline = useOnline();
    console.log(isOnline)
    if(!isOnline){
        return(
            <h1>Check Your Connection</h1>
        )
    }
    // Early Return
    if(!allRestaurants) return null;

    return(allRestaurants?.length === 0 ? <Shimmer /> :(
        <>
        
            <div className="pt-3 pb-3">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">

                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                    <input className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder='Search' value={searchVar} onChange={(e)=>{setSearchVar(e.target.value)}}/>
                    <button className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{
                        const data =  filterData(searchVar, allRestaurants);
                        setFilterRestaurans(data); 
                    }}>Search</button>
                </div>
            </div>
        
            <div className="grid grid-cols-4 gap-4">
                {filterRestaurans.map((list)=>{
                    return (
                        <Link className="shadow-lg bg-emerald-400 rounded-md" to={"/restaurant/"+list.info.id} key={list.info.id}>
                            <Card {...list.info} />
                        </Link>
                    );
                })}
            </div>
            
        </>
    )
    );
 };

 export default Body;