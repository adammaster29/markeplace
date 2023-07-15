import React from 'react';

const Productos = () => {
  const storedUsername = localStorage.getItem('username');

  return (
    <div className='padre__productos'>
        {/* *****************navegacion************** */}
            <ul className="hijo__navbar-menu">
                <li>  {storedUsername && <p>User: {storedUsername}</p>}</li>
                <li><a href="/login">Login</a></li>
                <li><span>Categoria</span></li>
                <li><span>Compras</span></li>
                <li><span>Ventas</span></li>
            </ul>
       
        {/* ******************productos********************** */}
        <div className="hijo__productos">

        </div>
    </div>
  );
};

export default Productos;
