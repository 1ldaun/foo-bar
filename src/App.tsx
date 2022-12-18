import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./views/MainPage/MainPage";
import Header from "./components/Header/Header";
import ConfidentialPage from "./views/ConfidentialPage/ConfidentialPage";
import QuestionsPage from "./views/QuestionsPage/QuestionsPage";
import PromoPage from "./views/PromoPage/PromoPage";
import ContactsPage from "./views/ContactsPage/ContactsPage";
import RationsPage from "./views/RationsPage/RationsPage";
import CartPage from "./views/CartPage/CartPage";
import { RationInterface } from "./interfaces/Ration.interface";

export const CartContext = createContext<any>(null);

function App() {
  const [cartItems, setCartItems] = useState<RationInterface[]>([]);

  const addItemToCart = (item: RationInterface) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (item: RationInterface) => {
    let cartItemsCopy = [...cartItems].filter(
      (cartItem) => item.description !== cartItem.description
    );
    setCartItems(cartItemsCopy);
  };

  const getCartItems = () => {
    return cartItems;
  };

  return (
    <BrowserRouter>
      <CartContext.Provider
        value={{ addItemToCart, getCartItems, removeItemFromCart }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/conf" element={<ConfidentialPage />} />
          <Route path="/qa" element={<QuestionsPage />} />
          <Route path="/promo" element={<PromoPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/rations" element={<RationsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
