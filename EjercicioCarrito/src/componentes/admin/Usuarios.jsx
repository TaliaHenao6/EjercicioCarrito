const Usuarios = () => {
  return (
    <>
      <table>
        <tr>
          <th>ROL</th>
          <th>NOMBRE</th>
          <th>CORREO</th>
          <th>TELEFONO</th>
          <th>DIRECCION</th> <th>ACCIONES </th>
        </tr>

        <tr>
          <td>USER</td>
          <td>Maria Anders</td>
          <td>Germany@correo.com</td>
          <td>3204828258</td>
          <td>POR ALLI EN AQUEL ALTO</td>
          <td>
            <button> EDITAR USER</button>
            <button>ELIMINAR USER</button>
          </td>
        </tr>
        <tr></tr>
      </table>
      <button>AGREGAR USER</button>
    </>
  );
};
export default Usuarios;
