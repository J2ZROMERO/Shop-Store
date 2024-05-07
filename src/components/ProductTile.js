import React from 'react';

const ProductTile = ({ product }) => {
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
        "justify-content": "space-evenly"
        }}>

        <h5 className="card-title">{product.title}</h5>
        {/* <p className="card-text">
          {product.description}
        </p> */}
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default ProductTile;
