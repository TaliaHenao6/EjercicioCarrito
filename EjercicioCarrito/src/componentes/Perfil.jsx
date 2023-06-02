import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:3001/usuarios";

const Perfil = () => {
  const [data, setData] = useState({});
  const getUser = localStorage.getItem("userId");
  const idUser = parseInt(getUser);

  useEffect(() => {
    axios
      .get(baseUrl, {
        params: { id: idUser },
      })
      .then((response) => {
        if (response.data.length > 0) {
          const respuesta = response.data[0];
          setData(respuesta);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idUser]);

return (
  <section className="main-container">
    <div className="container">
      <h2>My Profile</h2>
      <div className="">
        <img src="./src/images/user.png" alt="User" />
      </div>
      <div className="">
        <strong>Nombre:</strong>
        {data.name}
      </div>
      <div className="">
        <strong>Teléfono:</strong> {data.phone}
      </div>
      <div className="">
        <strong>Dirección:</strong> {data.address}
      </div>
      <div className="">
        <strong>Email:</strong> {data.email}
      </div>
      <div className="">
        <strong>Rol:</strong> {data.role}
      </div>
    </div>
  </section>
);
};

export default Perfil;
