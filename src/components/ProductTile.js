import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCard, removeFromCart } from '../store/CartSlice';

const ProductTile = ({ product }) => {

const dispatch = useDispatch(); 

const { cart } = useSelector((state) => state);


const handleAddToCart= () => {
  dispatch(addToCard(product))
}

const handleRemoveToCart= () => {
  dispatch(removeFromCart(product.id))
}

  return (
    <div className="card col-3" style={{ width: "18rem" }}>
      <div className='h-50 text-center mt-2' >
      <img src={product.image} className="card-img-top h-100 w-75" alt="..." />

      </div>
      <div 
      className="card-body h-50" 
      style={{"text-align": "center",
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "space-between",
        }}>

        <h5 className="card-title">{product.title}</h5>
        
        <button  onClick={  cart.some((item)=> item.id === product.id) ?  handleRemoveToCart : handleAddToCart} className="btn btn-primary">
          {cart.some((item)=> item.id === product.id) ? "Remove From Cart" : "Add To Cart"   }
        </button>
      </div>
    </div>
  );
};

export default ProductTile;
