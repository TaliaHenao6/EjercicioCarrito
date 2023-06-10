// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const useStyles = makeStyles(() => ({
//   carouselContainer: {
//     width: '100%',
//     maxWidth: '100%',
//     //height: '30vh',
//     margin: '0 auto',
//   },
// }));

const Principal = () => {
  // const classes = useStyles();
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const images = [
  //   './src/images/principal.png',
  //   './src/images/oferta.jpg',
  //   './src/images/electrodomesticos.jpg',
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [images.length]);

  return (
    <section className="principal">
      {/* <div className={classes.carouselContainer}>
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
      </div> */}

      <div className='row'>
        <div className='col-6'><h2 className='titul-home'>Descubre los mejores electrodomésticos para tu hogar</h2></div>
        <div className="col-6"><p className='text-home'>
          Contamos con electrodomésticos eficientes y de calidad para que puedas
          hacer tus tareas diarias de manera más cómoda y eficiente. Si estás
          buscando los mejores electrodomésticos para tu hogar, has llegado al
          lugar indicado.
        
        </p>
       
        </div>  
        
      </div>
      <div className='col-6'><h2 className='titul-home2'>-productos destacados-</h2></div>
            
              <div className="items-list2">
                <div className="item-home"><a href="/Productos"><img className='item-homeimg' src="./src/images/licuadora.jpg" alt=""/></a> </div>
                <div className="item-home"><a href="/Productos"><img className='item-homeimg' src="./src/images/estufa.jpg" alt=""/> </a> </div>
                <div className="item-home"><a href="/Productos"><img className='item-homeimg' src="./src/images/nevera.jpg" alt=""/> </a> </div>
                <div className="item-home"><a href="/Productos"><img className='item-homeimg' src="./src/images/cafetera.jpg" alt=""/></a>  </div>
              </div>
             
             
            



      
            
      <div className='row'>
        <div className="deshome col-6">
        <h3>"Contamos con una amplia gama de electrodomésticos innovadores y eficientes energéticamente"</h3>
          <p className='text-home' >Déjanos guiarte por nuestro vasto catálogo de electrodomésticos de última generación. 
            Desde refrigeradores y lavadoras hasta televisores y sistemas de sonido, 
            tenemos todo lo que necesitas para equipar tu hogar con lo mejor en tecnología y funcionalidad. <br /><br />
            
            Nuestros electrodomésticos no solo ofrecen un diseño elegante y moderno, 
            sino que también están diseñados para adaptarse a tu estilo de vida ocupado. 
            Con características innovadoras y eficiencia energética, 
            puedes estar seguro de que estás invirtiendo en productos que te brindarán comodidad, ahorro de tiempo y recursos.
            </p>

        </div>
      
       <div className="deshome col-4">
        <form className="single-contact">
        <img src="./src/images/contact2.png" alt=""/> 
          <h2>Suscríbete a nuestro Boletín Informativo</h2>
          <p>MANTENTE INFORMADO- sé el primero en enterarte de nuevos <br />productos,
             promociones y contenido exclusivo:</p>
          <input className='input' type="email" placeholder="Correo electrónico" required />
          <div className="form-info"><input className='btn-home' type="submit" value="Suscríbete ya!" /></div>
          
        </form></div> 
      </div>
    </section>
  );
};

export default Principal;