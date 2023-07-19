import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import catalogo from '../catalogo.json';

const Productos = () => {
  const storedUsername = localStorage.getItem('username');
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };

  const [productos, setProductos] = useState([]);
  useEffect(() => {
    setProductos(catalogo);
  }, []);

  // ************************************comprar mediante WhatsApp********************
  const handleCompra = (producto) => {
    const message = `¡Hola! Estoy interesado en comprar el producto,${producto.nombre} por un precio de ${producto.precio}. Descripcion ${producto.descripcion}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/573013803583?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div className='padre__productos'>
      {/* *****************navegacion************** */}
      <div className="navegacion__contenedor">
        <ul className="hijo__navbar-menu">
          <li><img className='menu__image-logo' src="/img/ADAM_SHOP.png" alt="" /></li>
          <li className='name-nav'>{storedUsername && <p>User: {storedUsername}</p>}</li>
          <li className='name-nav'><span onClick={login}>Login</span></li>
          <li className='name-nav'><span>Categoria</span></li>
          <li className='name-nav'><span>Compras</span></li>
        </ul>
      </div>

      {/* ******************productos********************** */}
      <div className="hijo__productos">
        <div className="productos__title">
          <h1 className='title'> Adam Shop</h1>
          <div className="buscador"> <input type="text" name="buscar" id="buscar" /> <i className='bx bx-search lupa'></i> </div>
        </div>
        <div className="productos__all">
          {productos.map(producto => (
            <ul className='productos__map' key={producto.id}>
              <li><img src={producto.image.url} alt="" /></li>
              <li>{producto.nombre}</li>
              <li className='productos__all-precio'>Cop. {producto.precio}</li>
              <li className='descripcion__producto'>{producto.descripcion}   <span className='comprar' onClick={() => handleCompra(producto)}>Comprar</span> </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;
