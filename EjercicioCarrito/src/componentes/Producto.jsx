import { Button } from "@mui/material";
import AddShoppingCartIcon  from '@mui/icons-material/AddShoppingCart';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Producto = ({infoProducto}) =>{

    console.log(infoProducto);
    return (
            <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 140 }}>
                    <img src={infoProducto.image} alt={infoProducto.nombre} sx={{maxWith:100,  height: 140}}  />
                </CardMedia >
                <CardContent>
                    <h3>{infoProducto.nombre}</h3>
                    <p>{infoProducto.precio}</p>
                    <p>{infoProducto.descripcion}</p>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="secondary" startIcon={<AddShoppingCartIcon />}>Agregar al carrito</Button>
                </CardActions>
            </Card>
            </>
    )
}

export default Producto;