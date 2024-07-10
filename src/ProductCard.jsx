// card component

import { useState } from "react";

// eslint-disable-next-line react/prop-types
function ProductCard({ productImg, productName,productPrice, inCart, setInCart }) {
  const [show, setShow] = useState(true);

  // Add to card function with state
  const handleAdd = () => {
    // change the state of the add button
    setShow(!show);
    setInCart(inCart + 1);
  };

  // Remove function with state
  const handleRemove = () => {
    // change the state of the remove button
    setShow(!show);
    setInCart(inCart - 1);
  };

  return (
    // props used for productname, image , and cart updations
    <div className="card-component">
      <img src={productImg} alt="no data" />
      <h3 className="pro-name">{productName}</h3>
      <h4 className="price">{productPrice}</h4>

      {/* Used ternary operator  */}
      {show === true ? (
        <button className="cart-btn" onClick={handleAdd}>Add to Cart</button>
      ) : (
        <button className="cart-btn"  onClick={handleRemove}>Remove from Cart</button>
      )}
    </div>
  );
}

export default ProductCard;