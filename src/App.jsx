import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import '../Productos.css';
import '../Responsive.css';
import Login from './components/Login';
import Productos from './components/Productos';
import { useState } from 'react';

function App() {
  const [modoNocturno, setModoNocturno] = useState(false);

  const noche = () => {
    setModoNocturno(!modoNocturno)
  }
  return (
    <div className={`App ${modoNocturno ? 'dark-mode': ''}`}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Productos noche={noche} modoNocturno={modoNocturno} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
