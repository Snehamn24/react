import './App.css';
//import Home from './components/Home';
import Home from './components/Home';
//import Navbar from './components/Navbar';
//import { useLocation } from "react-router-dom";
import { Routes ,Route,Link } from 'react-router-dom';
import Movie from './components/Movie';
import Restaurant from './components/Restaurant';
import Review from './components/Review';



function App() {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/movies' element={<Movie />}/>
      <Route path='/restaurant' element={<Restaurant />}/>
      <Route path='/Review' element={<Review />}/>
    </Routes>
    
   </>
      
   
  );
}

export default App;
