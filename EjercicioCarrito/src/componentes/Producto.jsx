import { Button, BottomNavigationAction } from "@mui/material";
import AddShoppingCartIcon  from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Favorite from "./Heart";
import { useContext } from "react";

import Carrito from "./Carrito";
import "./Styles.css";

const Producto = ({infoProducto}) =>{

    // const { addToCart } = useContext(Carrito); 

    const handleAddToCarrito = (infoProducto) => { 
        alert(`Producto ${infoProducto.id} añadido a la lista: ${infoProducto.nombre}`);
        // addToCart(infoProducto); 
    }

    return (
            <>
            <Card sx={{ maxWidth: 345 }} className="item">
                <CardMedia sx={{ height: 140 }}>
                    <img src={infoProducto.image} alt={infoProducto.nombre} sx={{maxWith:100,  height: 140}}  />
                </CardMedia >
                <CardContent>
                    <h3 className="name">{infoProducto.nombre}</h3>
                    <p className="price">{infoProducto.precio}</p>
                    <p className="description">{infoProducto.descripcion}</p>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="secondary" startIcon={<AddShoppingCartIcon />} onClick={() => handleAddToCarrito(infoProducto)} >Agregar al carrito</Button>
                    <Favorite infoProducto={infoProducto.nombre}/>
                </CardActions>
            </Card>
            </>
    )
}

export default Producto;