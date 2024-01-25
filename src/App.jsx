import React from "react";
import { Header } from "./Components/Header/Header";
import { Products } from "./Pages/Home/Products";
import Provider from "./Context/Provider";
import { Cart } from "./Components/Cart/Cart";

export const App = () => {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>
  );
};
