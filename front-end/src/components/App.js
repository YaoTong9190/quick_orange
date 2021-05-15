import React, { useEffect, useState } from "react";
import Products from "./Products";
import Navbar from "./Navbar";
import Login from "./Login";
import { commerce } from "../lib/commerce";
import Cart from "./Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddressForm from "./AddressForm";
import Checkout from "./Checkout";
import Signin from "./Signin";
import NewlyShelf from "./NewlyShelf";
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };
  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };
  const handleRemoveCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };
  const handleEmptyCartQty = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Login exact path="/login" />
          <Signin exact path="/signin" />
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleEmptyCartQty={handleEmptyCartQty}
              handleRemoveCartQty={handleRemoveCartQty}
              handleUpdateCartQty={handleUpdateCartQty}
            />
          </Route>
          <Route exact path="/addressform">
            <AddressForm />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
