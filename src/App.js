import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Default from "./components/Default";
import Modal from "./components/Modal";

function App() {
  return (
   <>
   <Navbar />
   <Switch>
   <Route exact path='/' component={ProductList} />  
   <Route path='/details' component={Details} />  
   <Route path='/Cart' component={Cart} />  
   <Route  component={Default} />  
   </Switch>
   <Modal />  
  
   </>
  );
}

export default App;
