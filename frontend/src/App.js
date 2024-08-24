import Footer from "./Component/Footer.mjs";
import Nav from "./Component/Nav.mjs";
import Slider from "./Component/Slider.mjs";
import Dog from "./Component/Dog.mjs";
import { Routes, Route } from "react-router-dom";
import Cat from "./Component/Cat.mjs";
import Birds from "./Component/Birds.mjs";
import Horse from "./Component/Horse.mjs";
import AboutUs from "./Component/AboutUs.mjs";
import AdminLogin from "./Component/AdminLogin.mjs";
import  ProductAdd from"./Component/ProductAdd.mjs"
import Cart from "./Component/Cart.mjs";

import { useState } from "react";
import ProductDelete from "./Component/ProductDelete.mjs";
import ProductEdit from "./Component/ProductEdit.mjs";
import Fish from "./Component/Fish.mjs";
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
  
    setCart([...cart, product]);
  }
  const [id, setId] = useState();

  const editProduct = (_id) => {
  
    setId(_id);
  

  }
  return (
    <>
      <Nav />
      <Slider />

      <Routes>
        <Route exact path="/dog" element={<Dog addToCart={addToCart} />} />
        <Route exact path="/cat" element={<Cat addToCart={addToCart} />} />
        <Route exact path="/birds" element={<Birds addToCart={addToCart}/>} />
        <Route exact path="/horse" element={<Horse addToCart={addToCart}/>} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/adminLogin" element={<AdminLogin />} />
        <Route exact path="/ProductAdd" element={<ProductAdd />} />
        <Route exact path="/ProductDelete" element={<ProductDelete editProduct={editProduct} />} />
        <Route exact path="/editProduct" element={<ProductEdit id={id}/>} />

        <Route exact path="/cart" element={<Cart cart={cart} />} />
        <Route exact path="/fish" element={<Fish />} />

        
        



      </Routes>
      <div >
        <Footer />
      </div>
    </>
  );
}

export default App;
