import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import catalogo from "/catalogo.json"

const Productos = ({ modoNocturno, noche }) => {
  const storedUsername = localStorage.getItem('username');
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  // const navigate = useNavigate();
const detalles = (id) => {
  navigate(`/producto/${id}`);
};
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    setProductos(catalogo);
  }, []);

  // ************************************comprar mediante WhatsApp********************
  const handleCompra = (producto) => {
    const message = `¡Hola! Estoy interesado en comprar el producto ${producto.nombre} por un precio de ${producto.precio}. Descripcion ${producto.descripcion}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/573013803583?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
  };

  const [searchTerm, setSearchTerm] = useState('');

  // Función de búsqueda
  const buscar = () => {
    return productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Manejar cambios en el input de búsqueda
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };
  // **********************************modal tarjetas detalles************************
  const [modal, setModal] = useState(false);

  const selectModal = () => {
    setModal(!modal);
  };
  // **************************menu amburguesa*************************
  const [amburguesa, setAmburguesa] = useState(false);
  const menu = () => {
    setAmburguesa(!amburguesa);
  }

  return (
    <div className='padre__productos'>
      {/* *****************navegacion************** */}
      {amburguesa && (
        <div className="navegacion__contenedor">
          <ul className="hijo__navbar-menu">
            <img className='menu__image-logo' src="/img/ADAM_SHOP.png" alt="" />
            <li className='name-nav-user'>{storedUsername && <p> {storedUsername}</p>}</li>
            <li onClick={login} className='name-nav'><span >Login</span></li>
            <li onClick={selectModal} className='name-nav'><span>Categoria</span></li>
            {modal && (
              <ul className='modal'>
                <li>tecnologias</li>
                <li>ropas</li>
                <li>zapatos</li>
              </ul>
            )

            }


            <li onClick={noche} className='name-nav'><span>{modoNocturno ? 'claro' : 'oscuro'}</span></li>
          </ul>
        </div>
      )

      }

      {/* ******************productos********************** */}
      <div className="hijo__productos">
        <div className="productos__title">
          <h1 className='title'> Adam Shop</h1>
         
            <input
              value={searchTerm}
              onChange={handleSearchTermChange}
              type="text"
              name="buscar"
              id="buscar"
              placeholder='Buscar Productos'
            />
            {/* <button onClick={menu} >menu</button> */}
            <i  onClick={menu} class='bx bx-menu'></i>
         
        </div>
        <div className="productos__all">
          {/* Usar la función buscar para filtrar los productos */}
          {buscar().map(producto => (
            <ul onClick={() => detalles(producto.id)} className='productos__map' key={producto.id}>
              <li><img src={producto.image.url} alt="" /></li>
              <li>{producto.nombre}</li>
              <li className='productos__all-precio'>Cop. {producto.precio}  <i class='bx bxs-plus-circle'></i> </li>
              <li className='descripcion__producto'>{producto.descripcion}   <span className='comprar' onClick={() => handleCompra(producto)}>Comprar</span> </li>
              {/* *********************modal************************* */}

            </ul>
          ))}
        </div>

        <footer>
          <div className="contactos">
            <p>Contactos</p>
            <span className='contatcos__correo'>Adammaster29@gmail.com</span>
            <span>
              <i className="bx bxl-twitter"></i>
              <i className="bx bxl-instagram"></i>
              <i className="bx bxl-facebook"></i></span>
          </div>
          <div className="politicas">
            <p>Politicas</p>
            <span>Privacidad</span>
            <span>Seguridad</span>
          </div>
          <div className="empresa">
            <p>Empresa</p>
            <span>About Us</span>
            <span>Precios y Pagos</span>
          </div>

        </footer>
      </div>

    </div>
  );
};

export default Productos;
