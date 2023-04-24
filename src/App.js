// import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useState } from "react";
import Form from './components/UserForm';
import Header from "./components/Header";
import Products from "./components/Products";

function App() {

  const [products,setProducts] = useState([])
  const [cartCount,setCartCount] = useState(0)

  const addProduct = (data) => {
    setProducts((prevProduct) => [...prevProduct,data])
  }

  const addToCart = () => {
    setCartCount((prevCount) => prevCount+1)
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
<>
    <Header cartCount={cartCount}/>
    <Form addProduct={addProduct} addToCart={addToCart}/>
    <Products products={products} addToCart={addToCart} />
    </>
  );
}

export default App;
