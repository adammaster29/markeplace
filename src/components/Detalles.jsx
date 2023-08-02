import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useParams } from 'react-router-dom';

const Detalles = ({ productos }) => {
  // Obtener el parámetro de ID del producto desde la URL
  const { id } = useParams();

  // Buscar el producto correspondiente en el arreglo de datos
  const producto = productos.find((producto) => producto.id === parseInt(id));

  // Si el producto no se encuentra, puedes mostrar un mensaje de error o redirigir a otra página
  if (!producto) {
    return <div>No se encontró el producto.</div>;
  }

  return (
    <div className="detalles__producto">
      <Carousel>
        {/* Utilizamos el mismo producto.image.url para mostrar las imágenes en el carrusel */}
        
          <img className='detalles__img' src={producto.urls?.[0]} alt={producto.nombre} />
       
        {/* Si tienes más imágenes para mostrar en el carrusel, puedes agregarlas aquí */}
      
                    <img className='detalles__img' src={producto.urls?.[1]} alt={producto.nombre} />

                    <img className='detalles__img' src={producto.urls?.[2]} alt={producto.nombre} />
         
      </Carousel>
      {/* <img className='detalles__img' src={producto.image.url} alt={producto.nombre} /> */}
      <h2>{producto.nombre}</h2>
      <p>Precio: COP {producto.precio}</p>
      <p>{producto.descripcion}</p>
    </div>
  );
};

export default Detalles;
