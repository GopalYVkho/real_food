import { useSelector,useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import {clearCart} from "../utils/CartSlice";

const Cart = () =>{
    const cartItem = useSelector(store => store.cart.items);
    console.log(cartItem)
    const dispatch = useDispatch();
    const handelClearCart = () =>{
        dispatch(clearCart());
    };
    return(
        <>
            <h1 className="font-bold text-3xl">cart Item - {cartItem.length}</h1>
            <button onClick={()=>handelClearCart()}>Clear Cart</button>
            {
                cartItem.map(item=>{
                    return <FoodItem key={item.id} {...item}/>
                })
            }
        </>
    )
}
export default Cart;