import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import About from './Pages/About';
import Stays from './Pages/Stays';
import Register from './Pages/Register';
import Travels from './Pages/Travels';
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className='App'>
    
      <BrowserRouter>
      
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Tours' element={<Stays />} />
          <Route path='/About' element={<About />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Travels/:name' element={<Travels />}>
          </Route>
          <Route path='/Register' element={<Register />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
} 

export default App;