import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import "./Styles.css";

const Heart = ({ infoProducto }) => {
  const [like, setLike] = useState(false);
  const [favorito, setfavorito] = useContext(CarritoContext);

  const addToFavorite = () => {
    setfavorito((currentItems) => {
      alert("agregamos a favoritos");
      //   return [...currentItems, { infoProducto }];
      //   const elementFound = currentItems.find(
      //     (element) => element.id === idProducto
      //   );
      //   if (elementFound === undefined) {

      //   }
      //  else {
      //     return currentItems.map((item) => {
      //       if (item.id === idProducto) {
      //         return { ...item, cantidad: item.cantidad + 1 };
      //       } else {
      //         return item;
      //       }
      //     });
      //   }
      // });
    });
  };

  const handleClick = () => {
    if (like == true) {
      setLike(false);
      // console.log(`se quito de favoritos! ${infoProducto.nombre}`);
    } else {
      setLike(true);
      //   addToFavorite(infoProducto);

      // console.log(`Se agrego a favoritos ${infoProducto.nombre}`);
    }
    // wishlist
    // like == true ? setLike(false) : setLike(true)
  };
  return (
    <>
      <div className="liked" color="primary" onClick={handleClick}>
        {like == true ? (
          <Favorite color="error" />
        ) : (
          <FavoriteBorder color="error" />
        )}
      </div>
    </>
  );
};

export default Heart;
