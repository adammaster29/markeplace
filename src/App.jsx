import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import '../Productos.css';
import '../Responsive.css';
import Login from './components/Login';
import Productos from './components/Productos';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Productos />} />
      </Routes>
    </Router>
  );
}

export default App;
