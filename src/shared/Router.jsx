import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import IntroPage from "../pages/IntroPage";
import DexPage from "../pages/DexPage";
import { AppProvider } from "../Context/AppContext";

const Router = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/dex" element={<DexPage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default Router;
