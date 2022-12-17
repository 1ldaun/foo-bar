import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./views/MainPage/MainPage";
import Header from "./components/Header/Header";
import ConfidentialPage from "./views/ConfidentialPage/ConfidentialPage";
import QuestionsPage from "./views/QuestionsPage/QuestionsPage";
import PromoPage from "./views/PromoPage/PromoPage";
import ContactsPage from "./views/ContactsPage/ContactsPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/conf" element={<ConfidentialPage />} />
        <Route path="/qa" element={<QuestionsPage />} />
        <Route path="/promo" element={<PromoPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
