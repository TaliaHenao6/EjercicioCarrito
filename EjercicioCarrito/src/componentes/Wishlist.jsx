import React, { useContext } from "react";
import ProductoCarrito from "./ProductoCarrito";

import "./styles.css";

const Wishlist = () => {
  //   const [wishlist, setWishlist] = useContext(WishlistContext);
  //   const cantidad = wishlist.length;

  const removeFromWishlist = (index) => {
    setWishlist((prevWishlist) => prevWishlist.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="wishlist-container">
        <div>Items en la Wishlist: hii </div>
        {/* {wishlist.length > 0 ? (
          wishlist.map((producto, index) => (
            <ProductoCarrito
              key={index}
              data={producto}
              removeFromWishlist={() => removeFromWishlist(index)}
            />
          ))
        ) : (
          <p>No has agregado productos a la Wishlist aún.</p>
        )} */}
      </div>
    </>
  );
};

export default Wishlist;
