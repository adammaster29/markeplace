
import React, { useEffect, useState } from 'react';
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
   console.log(producto)
   return (
     <div className="detalles__producto">
       <img src={producto.image.url} alt={producto.nombre} />
       <h2>{producto.nombre}</h2>
       <p>Precio: COP {producto.precio}</p>
       <p>Descripción: {producto.descripcion}</p>
       {/* Otros detalles del producto que desees mostrar */}
     </div>
   );
 };
 
export default Detalles;

