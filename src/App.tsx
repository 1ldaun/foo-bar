import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./views/MainPage/MainPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
