import {useEffect, useState} from "react"
import axios from "axios";
import {Button} from "@mui/material";
import {Delete, Edit, AddCircle} from "@mui/icons-material"


const baseUrl = "http://localhost:3001/usuarios";

const Usuarios = () => {
  const [users, setUsers] = useState([]);
  const getUser = localStorage.getItem("userId");
  const idUser = parseInt(getUser);

  useEffect(() => {
    axios.get(baseUrl)
    .then((response) =>{
      // console.log(response.data);
      // return response.data;
      // const respuesta = response[0];
      setUsers(response.data);
    }).catch();
  }, [idUser]);

  return (
    <>
      <Button
        variant="contained"
        color="success"
        startIcon={<AddCircle />}
        size="large"
      >
        AGREGAR USER
      </Button>
      <table>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>NOMBRE</th>
          <th>CORREO</th>
          <th>TELEFONO</th>
          <th>DIRECCION</th>
          <th>ROL</th>
          <th>ACCIONES </th>
        </tr>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
            <td>{user.role}</td>
            <td className="">
              <Button variant="contained" size="small">
                <Edit />
              </Button>
              <Button variant="outlined" size="small" color="error">
                <Delete />{" "}
              </Button>
            </td>
          </tr>
        ))}
      </table>
      
    </>
  );
};
export default Usuarios;
