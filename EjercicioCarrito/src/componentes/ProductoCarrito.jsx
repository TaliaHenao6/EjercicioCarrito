import {useContext}from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { Button, BottomNavigationAction } from "@mui/material";
import { Delete, AddShoppingCart } from "@mui/icons-material";

import {CarritoContext} from "../context/CarritoContext";
import "./styles.css";

const ProductoCarrito = ({data}) => {
  const [carrito, setCarrito] = useContext(CarritoContext)
    const cantidad = data.cantidad;

  // console.log(data)
  const formatPrice = (totalPrice) => {
    return totalPrice.toLocaleString("es-CO");
  };

  const addItemToCar = (idProducto) => {
    alert("Vamos a sumar un producto");
 
    if(data.infoProducto.id == idProducto){

    }
    
    // setCarrito((currentItems) => {
    //   const elementFound = currentItems.find(
    //     (element) => element.id === idProducto
    //   );
    //   if (elementFound === undefined) {
    //     return [...currentItems, { id: idProducto, infoProducto, cantidad: 1 }];
    //   } else {
    //     return currentItems.map((item) => {
    //       if (item.id === idProducto) {
    //         return { ...item, cantidad: item.cantidad + 1 };
    //       } else {
    //         return item;
    //       }
    //     });
    //   }
    // });
  };

  const removeFromCar = (idProducto) => {
    alert("Vamos a restar un producto");
    setCarrito((currentItems) => {
      if (
        currentItems.find((element) => element.id === idProducto)?.cantidad ===
        1
      ) {
        return currentItems.filter((element) => element.id !== idProducto);
      } else {
        return currentItems.map((element) => {
          if (element.id === idProducto) {
            alert("")
            return { ...element, cantidad: element.cantidad - 1 };
          } else {
            return element;
          }
        });
      }
    });
  };


  return (
    <>
      <div className="item-carrito">
          <div className="item-img">
            <img className="avatar"
              src={data.infoProducto.image}
              alt={data.infoProducto.id + data.infoProducto.nombre}
            />
          </div>
          <div className="item-text">
            <h4 className="text-titulo">{data.infoProducto.nombre}</h4>
            <p className="text-precio">$ {formatPrice(data.infoProducto.precio)}</p>
            <span className="text-cantidad">Cantidad: {cantidad}</span>
          </div>
          <div className="item-actions">
            <div className="cantidad-buttons">
              <button className="btn" onClick={()=> {removeFromCar(data.infoProducto.id)}}>-</button>
              <span>{cantidad}</span>
              <button className="btn"  onClick={()=> {addItemToCar(data.infoProducto.id)}}>+</button>
            </div>

            <Button
              variant="outlined" size="small"
              color="error" 
              onClick={() => {removeFromCar(data.infoProducto.id)}}>
                <Delete />
            </Button>
          </div>
      </div>
    </>
  );
};

export default ProductoCarrito;
