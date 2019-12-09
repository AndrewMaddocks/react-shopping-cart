import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

//context
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    // add the given item to the cart
    setCart([...cart, item]);
  };

  const removeItem = itemId => {
    setCart(cart.filter(item => item.id !== itemId));
    console.log(cart);
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart, removeItem }}>
          <Navigation cart={cart} />

          {/* BEFORE 
	  	<Route
        exact
        path="/"
        render={() => <Products products={products} addItem={addItem} />}
      /> */}
          <Route exact path="/" component={Products} />

          {/* BEFORE <Route path="/cart" render={() => <ShoppingCart cart={cart} />} /> */}
          <Route path="/cart" component={ShoppingCart} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
