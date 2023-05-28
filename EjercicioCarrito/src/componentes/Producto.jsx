import { Button, BottomNavigationAction } from "@mui/material";
import AddShoppingCartIcon  from '@mui/icons-material/AddShoppingCart';
import {Delete, AddShoppingCart} from '@mui/icons-material'
import FavoriteIcon from '@mui/icons-material/Favorite';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Favorite from "./Heart";
import { useContext } from "react";

import Carrito from "./Carrito";
import "./styles.css";

const Producto = ({infoProducto, addToCar, removeToCar, addWishList}) =>{

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
                    <Button variant="contained" color="secondary" startIcon={<AddShoppingCartIcon />} onClick={() => addToCar(infoProducto)}>Agregar</Button>
                     <Button variant="contained" color="error" disabled startIcon={<Delete />} onClick={() =>removeToCar(infoProducto) }>eliminar</Button>
                    <Favorite infoProducto={infoProducto.nombre}/>
                </CardActions>
            </Card>
            </>
    )
}

export default Producto;