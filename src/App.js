import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Navbar } from './component/navbar';
import {Home} from "./component/pages/home";

import Product from "../src/component/pages/product";
import Services from "../src/component/pages/service";
import Sign from "../src/component/pages/signups";
import Footer from './component/footer';



function App() {
  return (
    <div className="App">
    < Router>
     <Navbar/>
    <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route  path="/services" element={<Services/>}/>
     <Route  path="/products" element={<Product/>}/>
     <Route  path="/signup" element={<Sign/>}/>
    </Routes>
     <Footer/>
    </Router>
     
    </div>
  );
}

export default App;
