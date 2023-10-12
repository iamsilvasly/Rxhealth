import './App.css';
import {Route, Routes } from 'react-router-dom'
// import Footer from './Components/Reuseable/Footer';
// import Button from './Components/Reuseable/Button';
import Home from "./pages/Home";
import About from './pages/About';
import Solution from './pages/Solution';
import Contact from './pages/Contact';
import Navbar from './Components/Reuseable/Navbar';
import Healthblog from './pages/Healthblog';
import Crm from './pages/Crm'
import Patient from './pages/Patient'
import Insigth from './pages/Insigth'
import Developer from './pages/Developer'
import Provider from './pages/Provider'
import Payer from './pages/Payer'

function App() {
  return (<>
    <Navbar/>
    
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/solutions" element={<Solution/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/healthblog" element={<Healthblog/>}/>
          <Route path="/payer" element={<Payer/>}/>
          <Route path="/patient" element={<Patient/>}/>
          <Route path="/provider" element={<Provider/>}/>
          <Route path="/crm" element={<Crm/>}/>
          <Route path="/insigth" element={<Insigth/>}/>
          <Route path="/developerer" element={<Developer/>}/>
    </Routes>
   
    {/* <Footer/> */}
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
