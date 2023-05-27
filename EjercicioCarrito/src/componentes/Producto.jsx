import { Button } from "@mui/material";
import AddShoppingCartIcon  from '@mui/icons-material/AddShoppingCart';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Producto = ({infoProducto}) =>{
    
    return (
            <>
            <Card >
                <CardMedia>
                    <img src="" alt={infoProducto.nombre} />
                </CardMedia>
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