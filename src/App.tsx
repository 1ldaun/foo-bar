import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./views/MainPage/MainPage";
import Header from "./components/Header/Header";
import ConfidentialPage from "./views/ConfidentialPage/ConfidentialPage";
import QuestionsPage from "./views/QuestionsPage/QuestionsPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/conf" element={<ConfidentialPage />} />
        <Route path="/qa" element={<QuestionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
