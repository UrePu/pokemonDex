import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import IntroPage from "../pages/IntroPage";
import DexPage from "../pages/DexPage";
import { Provider } from "react-redux";
import store from "../redux/config/configStore";

const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/dex" element={<DexPage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
