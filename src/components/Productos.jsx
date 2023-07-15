import React from 'react';
import { useNavigate } from 'react-router-dom';

const Productos = () => {
  const storedUsername = localStorage.getItem('username');
const navigate = useNavigate()
const login =()=>{
    navigate("/login")
}
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
                <h2>marketplace</h2>
                <input type="text" name="buscar" id="buscar" />
            </div>
        </div>
    </div>
  );
};

export default Productos;
