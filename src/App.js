import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className='container' >

      <Header />
      <Routes>  

      <Route exact path="/" element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      
      </Routes>

      
      <Footer/>
      
      

    </div>
  );
}

export default App;
