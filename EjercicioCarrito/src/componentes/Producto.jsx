import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import Favorite from "./Heart";

const Producto = ({ infoProducto }) => {
  const login = localStorage.getItem("login");
  const [carrito, setCarrito] = useContext(CarritoContext);
  const idProducto = infoProducto.id;

  const addToCar = () => {
    setCarrito((currentItems) => {
      const elementFound = currentItems.find(
        (element) => element.id === idProducto
      );
      if (elementFound === undefined) {
        return [...currentItems, { id: idProducto, infoProducto, cantidad: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === idProducto) {
            return { ...item, cantidad: item.cantidad + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCar = (idProducto) => {
    setCarrito((currentItems) => {
      if (
        currentItems.find((element) => element.id === idProducto)?.cantidad ===
        1
      ) {
        return currentItems.filter((element) => element.id !== idProducto);
      } else {
        return currentItems.map((element) => {
          if (element.id === idProducto) {
            return { ...element, cantidad: element.cantidad - 1 };
          } else {
            return element;
          }
        });
      }
    });
  };

  const getCantidadById = (id) => {
    return carrito.find((element) => element.id === id)?.cantidad || 0;
  };

  const cantidadXProducto = getCantidadById(idProducto);

  const formatPrice = (totalPrice) => {
    return totalPrice.toLocaleString("es-CO");
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="item">
      {cantidadXProducto > 0 && (
        <p className="cantidad"> {cantidadXProducto}</p>
      )}
      <CardMedia sx={{ height: 140 }}>
        <img
          src={infoProducto.image}
          alt={infoProducto.nombre}
          className="product-image"
        />
      </CardMedia>
      <CardContent>
        <h3 className="name">{infoProducto.nombre}</h3>
        <p className="price">{formatPrice(infoProducto.precio)}</p>
        <p className="description">{infoProducto.descripcion}</p>
      </CardContent>
      {login === "true" ? (
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddShoppingCartIcon />}
            onClick={() => addToCar(infoProducto)}
          >
            Añadir al carrito
          </Button>
          {/* <Button
          variant="contained"
          color="error"
          startIcon={<Delete />}
          onClick={() => removeFromCar(infoProducto.id)}
          >
          eliminar
        </Button> */}
          <Favorite infoProducto={infoProducto} />
        </CardActions>
      ) : (
        <CardActions>
          <Button variant="outlined" color="success">
            Comprar
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default Producto;
