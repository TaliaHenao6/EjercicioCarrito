import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Delete, Edit, AddCircle } from "@mui/icons-material";

const baseUrl = "http://localhost:3001/productos";

const Productos2 = () => {
  const [productos, setProductos] = useState([]);
  const getUser = localStorage.getItem("userId");
  const idUser = parseInt(getUser);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        // console.log(response.data);
        // return response.data;
        // const respuesta = response[0];
        setProductos(response.data);
      })
      .catch();
  }, [idUser]);

  console.log(productos);


  const disableProduct =(id) =>{
    confirm("Los productos no seran eliminados!, pero desahabilitaran para los usarios , ¿DESEAS, CONTINUAR?")

  }

  return (
    <>
      <Button
        variant="contained"
        color="success"
        startIcon={<AddCircle />}
        size="large"
      >
        Agregar Productos
      </Button>
      <table>
        <tr>
          <th>#</th>
          <th>id</th>
          <th>NOMBRE</th>
          {/* <th>DESCRIPCION</th>s */}
          <th>PRECIO</th>
          <th>Ruta IMAGEN</th>
          <th>ESTADO</th>
          <th>ACIONES</th>
        </tr>
        {productos.map((producto, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{producto.id}</td>
            <td>{producto.nombre}</td>
            {/* <td>id{producto.descripcion}</td> */}
            <td>{producto.precio}</td>
            <td>
              {/* <img src={producto.image} alt="" /> */}
              {producto.image}
            </td>
            <td>{producto.estado}</td>
            <td className="">
              <Button variant="contained" size="small">
                <Edit />
              </Button>
              <Button variant="outlined" size="small" color="error" onClick={()=> disableProduct(producto.id)}>
                <Delete />{" "}
              </Button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default Productos2;
