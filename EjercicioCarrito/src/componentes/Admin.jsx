import "./styles.css";
import Admi from "./Admi";

const Admin = () => {
  return (
    <section className="main-container">
      <div className="containers">
        <h1>MODO ADMINISTRADOR</h1>
        <Admi />
        {/* <div className="ad">
          <img src="./src/images/admin.jpg" alt="Admin" />
        </div>
        <div className="role">
          <strong>ROL:</strong>
        </div>
        <div className="nam">
          <strong>NOMBRE:</strong>
          <div className="cor">
            <strong>EMAIL:</strong>
          </div>
          <div className="max">
            <button>AÑADIR PRODUCTO</button>
          </div>
          <div className="men">
            <button>ELIMINAR PRODUCTOS</button>
          </div>
          <div className="see">
            <button>VER USUARIOS</button>
          </div>
          <div className="add">
            <button>AGREGAR USUARIOS</button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Admin;
// --------------------------------------------
// import React, { useState } from "react";
// import "./AdminInterface.css";

// function Admin() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userInfo, setUserInfo] = useState(null);

//   const handleLogin = () => {
//     // Aquí puedes realizar la lógica de autenticación
//     // Utiliza el valor de 'username' y 'password' para verificar los datos

//     // Ejemplo de verificación básica (correo y contraseña predefinidos)
//     if (username === "nicolas@correo.com" && password === "123456") {
//       const user = {
//         name: "Administrador",
//         email: username,
//         role: "admin",
//       };
//       setLoggedIn(true);
//       setUserInfo(user);
//     }
//   };

//   return (
//     <div className="admin-interface">
//       <h1>Panel de Administrador</h1>
//       {!loggedIn ? (
//         <div className="admin-content">
//           <input
//             type="text"
//             placeholder="Nombre de usuario"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Contraseña"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {/* <button className="admin-button" onClick={handleLogin}>
//             Iniciar sesión
//           </button> */}
//         </div>
//       ) : (
//         <div>
//           <p>
//             Bienvenido, {userInfo.name} ({userInfo.email})
//           </p>
//           {/* Aquí puedes mostrar más información de inicio de sesión */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Admin;
