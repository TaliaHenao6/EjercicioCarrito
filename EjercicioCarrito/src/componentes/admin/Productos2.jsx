import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Delete, Edit, AddCircle, Visibility, VisibilityOff } from "@mui/icons-material";

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


  const disableProduct =(id, nombre, descripcion, precio, image ) =>{
      if (
        confirm(
          "Los productos no seran eliminados!, pero desahabilitaran para los usarios , ¿DESEAS, CONTINUAR?"
        )
      ) {
        axios
          .put(`http://localhost:3001/productos/${id}`, {
            nombre,
            descripcion,
            image,
            precio,
            visible: false,
          })
          .then((response) => {
            console.log(response.data);
            alert("se modifico con exito!");
            window.location.href = "/Admin";
          }).catch;
      } else {
      }
  }

    const enableProduct = (id, nombre, descripcion, precio, image) => {
        axios
          .put(`http://localhost:3001/productos/${id}`, {
            nombre,
            descripcion,
            image,
            precio,
            visible: true,
          })
          .then((response) => {
            console.log(response.data);
            alert("se modifico con exito!");
            window.location.href = "/Admin";
          }).catch;
    };


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
            {producto.visible == true ? (
              <td>Disponible</td>
            ) : (
              <td>No Disponible</td>
            )}

            <td className="">
              <Button variant="contained" size="small">
                <Edit />
              </Button>
              {producto.visible == true ? (
                <Button
                  variant="outlined"
                  size="small"
                  color="error"
                  onClick={() =>
                    disableProduct(
                      producto.id,
                      producto.nombre,
                      producto.descripcion,
                      producto.precio,
                      producto.image
                    )
                  }
                >
                  <VisibilityOff />{" "}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  size="small"
                  color="success"
                  onClick={() =>
                    enableProduct(
                      producto.id,
                      producto.nombre,
                      producto.descripcion,
                      producto.precio,
                      producto.image
                    )
                  }
                >
                  <Visibility />{" "}
                </Button>
              )}
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default Productos2;
