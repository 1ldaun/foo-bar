import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./views/MainPage/MainPage";
import Header from "./components/Header/Header";
import ConfidentialPage from "./views/ConfidentialPage/ConfidentialPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/conf" element={<ConfidentialPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
