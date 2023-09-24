import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Footer from './Components/Reuseable/Footer';
// import Button from './Components/Reuseable/Button';
import Home from "./pages/Home";
import About from './pages/About';
import Solution from './pages/Solution';
import Contact from './pages/Contact';
import Navbar from './Components/Reuseable/Navbar';

function App() {
  return (<>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/solutions" element={<Solution/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          
    </Routes>
    </>
  //   <div className='app'>
  //     <Button style={{backgroundColor:'blue',color:'white', border: '1px solid blue',borderRadius: '50px'}}>Request Demo</Button>
  //     <Trusted/>
  //     {/* <Newsletter/> */}
  //     {/* <Navbar/> */}
  //     <Footer/>
  //     </div>
  // );
  );
}

export default App;
