import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet, Form } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import {Provider, provider} from "react-redux";
import Store from "./utils/store";
import Cart from "./components/Cart";

const Instamart = lazy(()=> import("./components/Instamart"));


const App = () =>{
    return(
        <Provider store={Store}>
            <Header />
            <div className="container mx-auto">
                <Outlet />
            </div>        
            <Footer />    
        </Provider>
    );
};

const routerApp = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement: <Error />,
        children:([
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"about",
                element:<About />,
                children:[
                    {
                        path:"profile",
                        element:<Profile />
                    }
    
                ]
            },
            {
                path:"contact",
                element:<Contact />,
            },
            {
                path:"/restaurant/:resid",
                element:<RestaurantMenu />
            },
            {
                path:"instamart",
                element:(
                <Suspense fallback={<Shimmer/>}>
                    <Instamart />
                </Suspense>
                )
            },
            {
                path:"cart",
                element:(
                <Suspense fallback={<Shimmer/>}>
                    <Cart />
                </Suspense>
                )
            },
        ])
    },
])

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerApp} />);
 