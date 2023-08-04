import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate, useParams } from 'react-router-dom';

const Detalles = ({ productos }) => {
  // Obtener el parámetro de ID del producto desde la URL
  const { id } = useParams();

  // Buscar el producto correspondiente en el arreglo de datos
  const producto = productos.find((producto) => producto.id === parseInt(id));

  // Si el producto no se encuentra, puedes mostrar un mensaje de error o redirigir a otra página
  if (!producto) {
    return <div>No se encontró el producto.</div>;
  }
const navigate = useNavigate();
const regresar =()=>{
  navigate("/")
}
  return (
    <div className="detalles__producto">
      <i onClick={regresar} className="bx bx-home"></i>

      <div className="detalles__contenedor-carousel">
        <Carousel>


          <img className='detalles__img' src={producto.urls?.[0]} alt={producto.nombre} />
          <img className='detalles__img' src={producto.urls?.[1]} alt={producto.nombre} />
          <img className='detalles__img' src={producto.urls?.[2]} alt={producto.nombre} />

        </Carousel>


        <div className="contenedor__detalle-precio">
        <h2 className='titulo__detalle'>{producto.nombre}</h2>
        <p className='productos__all-detalle'>COP: {producto.precio}</p>
        <p className='descripcion__producto'>{producto.descripcion}</p>
        </div>

        
      </div>
    </div>
  );
};

export default Detalles;
