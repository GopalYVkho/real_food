import React, { useState } from 'react';
import logo from "/image/logo.png";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Title = () => {
    return(
        <div className="logo"> 
            <Link to="/">
                <img className="h-32 p-2" src={logo} alt="realFood" />
            </Link>
        </div>
    );
};


// Header Componet
const Header = () =>{

    const [userLogedin,setUserLogedin] = useState(false);
    const cartItem = useSelector(store => store.cart.items);
    console.log(cartItem);
    return(
        <div className="bg-emerald-400 shadow-lg">
            <div className="container mx-auto">  
                <div className="flex justify-between">
                    <Title />
                    <div className="nav-items">
                        <ul className="flex py-10" > 
                            <li className="px-10"><Link to="/">Home</Link></li>
                            <li className="px-10"><Link to="/about">About</Link></li>
                            <li className="px-10"><Link to="/contact">Contact</Link></li>
                            <li className="px-10"><Link to="/cart">Cart-{cartItem.length}</Link></li>
                            <li className="px-10"><Link to="/instamart">InstaMart</Link></li>
                        </ul>
                    </div>
                
                    {userLogedin ? <button onClick={()=>setUserLogedin(false)}>Logout</button>:<button onClick={()=>setUserLogedin(true)}>Login</button>}
                </div>
            </div>
        </div>
    );
};

export default Header;