
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/CartSlice";

const CartTile = ({ cartItem}) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = ()=>{
    dispatch(removeFromCart(cartItem.id))
  }  
  
    return (
    

<div className="card col-3" style={{ width: "18rem" }}>
<div className='h-50 text-center mt-2' >
<img src={cartItem.image} className="card-img-top h-100 w-75" alt="..." />

</div>
<div 
className="card-body h-50" 
style={{"text-align": "center",
  display: "flex",
  "flex-direction": "column",
  "align-items": "center",
  "justify-content": "space-evenly"
  }}>

  <p>Price: {cartItem.price}</p>
  <button  onClick={handleRemoveFromCart} className="btn btn-primary">
     Remove From Cart
  </button>
</div>
</div>
  );
}

export default CartTile;