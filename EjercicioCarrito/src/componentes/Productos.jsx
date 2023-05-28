import Producto from "./producto";
// import ListaProductos from "../productos.json";
import { useState } from "react";


const Productos = ({ListaProductos, addToCar, removeToCar}) =>{

      return (
        <>
        {/* <h1>lista</h1> */}
        <h1>Lista de Productos</h1>
        <p>Catidad de productos: { ListaProductos.length}</p>
        <div>
          {ListaProductos.map(producto =>
            <Producto key={producto.id} infoProducto={producto} addToCar={addToCar} removeToCar={removeToCar}/>)}
        </div>
        </>
        
      )

}
export default Productos;