import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import catalogo from "/src/catalogo.json";

const Productos = () => {
  const storedUsername = localStorage.getItem('username');
const navigate = useNavigate()
const login =()=>{
    navigate("/login")
}
const[venta,setVenta] = useState()
useEffect(()=>{
    setVenta(catalogo)
},[])
console.log(venta)
  return (
    <div className='padre__productos'>
        {/* *****************navegacion************** */}
            <ul className="hijo__navbar-menu">
                <li>  {storedUsername && <p>User: {storedUsername}</p>}</li>
                <li><span onClick={login} >Login</span></li>
                <li><span>Categoria</span></li>
                <li><span>Compras</span></li>
                <li><span>Ventas</span></li>
            </ul>
       
        {/* ******************productos********************** */}
        <div className="hijo__productos">
            <div className="productos__title">
                <h2 className='title'>marketplace</h2>
                <div className="buscador"> <input type="text" name="buscar" id="buscar" /> <i className='bx bx-search lupa'></i> </div>
            </div>
            <div className="productos__all">
                {venta?.map(product => (
                        <ul className='productos__map'>
                             <li><img src={product.image.url} alt="" /></li>
                            <li>{product.nombre}</li>
                            <li>$ {product.precio}</li>
                            <li className='descripcion__producto'>{product.descripcion}</li>
                        </ul>

                ))

                }
            </div>
        </div>
    </div>
  );
};

export default Productos;
