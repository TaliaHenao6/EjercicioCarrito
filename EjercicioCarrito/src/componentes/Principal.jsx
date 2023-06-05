import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const useStyles = makeStyles(() => ({
  carouselContainer: {
    width: '100%',
    maxWidth: '100%',
    //height: '10vh',
    margin: '0 auto',
  },
}));

const Principal = () => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    './src/images/principal.png',
    './src/images/oferta.jpg',
    './src/images/electrodomesticos.jpg',
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="principal">
    <div className={classes.carouselContainer}>
      <Carousel
        autoPlay={false}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        selectedItem={currentIndex}
        onChange={(index) => setCurrentIndex(index)}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel> 
    </div>
    <section className='page'>
    <div>
        <center><h2>Descubre los mejores electrodomésticos para tu hogar</h2></center>
          <p>
          Contamos con electrodomésticos eficientes y de calidad para que puedas hacer tus tareas diarias de 
          manera más cómoda y eficiente. Si estás buscando los mejores electrodomésticos para tu hogar, has llegado 
          al lugar indicado.
          </p>

          <div>
        <center><h2>Descubre los mejores electrodomésticos para tu hogar</h2></center>
          <p>
          Contamos con electrodomésticos eficientes y de calidad para que puedas hacer tus tareas diarias de 
          manera más cómoda y eficiente. Si estás buscando los mejores electrodomésticos para tu hogar, has llegado 
          al lugar indicado.
          </p>
          </div>
    </div>
    <div>
        <h2></h2>
          <p>
          
          </p>

    </div>
    </section>
    </section>
    
  );
};



export default Principal;