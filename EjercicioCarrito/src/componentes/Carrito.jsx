
import ProductoCarrito from "./ProductoCarrito";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

import "./styles.css";

const Carrito = () => {
  const [carrito, setCarrito] = useContext(CarritoContext);
  // Mostrar un total de productos en el carrito
  const cantidad = carrito.reduce((acc, element) => acc + element.cantidad, 0);

  const totalPrice = carrito.reduce(
    (acc, element) => acc + element.cantidad * element.infoProducto.precio,
    0
  );

  const formatPrice = (totalPrice) =>{
    return totalPrice.toLocaleString("es-CO");
  }

  const cleanCart = ()=>{
        if(confirm(`Tienes ${cantidad} productos en el carrito, ¿SEGURO QUE LOS QUIERES ELIMINAR?`)){
            setCarrito([]); 
            window.location.href = "/";
        }
  }

  return (
    <>
      <div className="cart-container">
        <div>item en Carrito: {cantidad} </div>
        {carrito.length > 0 ? (
          carrito.map((producto, idx) => (
            <ProductoCarrito key={producto.idx} data={producto} />
          ))
        ) : (
          <p>No Has agregado productos al carrito aún!.</p>
        )}
        <div className="precio-total">
          <span>Total</span>$ {formatPrice(totalPrice)}
        </div>
<<<<<<< HEAD
        <button className="vaciar-carrito" onClick={() => cleanCart()}>Vaciar Carrito</button>
        <button className="pagar">Pagar</button>
=======
        <button onClick={() => cleanCart()}>Limpiar carrito</button>
        <button>Pagar</button>
>>>>>>> 8bf4c0f12be2bab0f940a2a90ab37e9d23db9633
      </div>
    </>
  );
};

export default Carrito;
