import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartTile from "../components/CartTile";  

const Cart = () =>{

    const  [totalCart, setTotalCart] = useState(0); 

    const { cart }= useSelector((state) => state);
    useEffect(() => {
        setTotalCart(cart.reduce((total, item) => total + item.price, 0));
    }, [cart]);
    
    
    return (
           
        <>
            {
            cart && cart.length ?
            
            <div className="container mt-5">
                
            <div className="row gap-3">
                {
                    cart.map(cartItem => <CartTile key={cartItem.id} cartItem={cartItem} />)

                }
                
            </div>

<div className="container w-50 border border-info rounded-3 mt-5 mb-3">
                <h1 className="text-start mt-3"> SUMMARY </h1>
            <ul class="list-group w-100 mb-3">
  <li class="list-group-item d-flex justify-content-around"><h5 className="text-start text-start w-100"> Total Items </h5>  <h5>{cart.length}</h5></li>
  <li class="list-group-item d-flex justify-content-around"><h5 className="text-start w-100"> Total Amount: $ </h5> <h5>{totalCart}</h5> </li>
  
  
</ul>
</div>

            </div>

            
        

            :
            <div className="container mt-5 d-flex flex-column align-items-center justify-content-center">
                <h1 className="mt-5"> Your cart is empty </h1>
                 <Link to="/">
                    <button className="btn btn-info mt-5">SHOP NOW</button>
                    </Link>
                    
            </div>

            }
            
        </>
    );
}
export default Cart;