import "./styles.css";
import Admi from "./Admi";

const Admin = () => {
  return (
    <section className="main-container">
      <div className="containers">
        <h1>MODO ADMINISTRADOR</h1>
        <Admi />
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
