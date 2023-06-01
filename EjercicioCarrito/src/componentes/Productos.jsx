import Producto from "./producto";

const Productos = ({ ListaProductos, addToCar, removeToCar }) => {
  return (
    <div className="main-container">
      <h1>Lista de Productos</h1>
      <p>Cantidad de productos: {ListaProductos.length}</p>
      <div className="items-list">
        {ListaProductos.map((producto) => (
          <Producto
            key={producto.id}
            infoProducto={producto}
            addToCar={addToCar}
            removeToCar={removeToCar}
          />
        ))}
      </div>
    </div>
  );
};
export default Productos;
