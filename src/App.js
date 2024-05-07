import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
function App() {
  return (
    <div className='container'>

      <Header />
      <Routes>  

      <Route exact path="/" element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      
      </Routes>
    </div>
  );
}

export default App;
