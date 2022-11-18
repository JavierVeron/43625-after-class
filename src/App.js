import React from "react";
import Banners from "./components/Banners";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Promocion from "./components/Promocion";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"¡Bienvenidos a McDonalds Argentina!"} />
      <Banners />
      <Promocion />
      <Footer />
    </div>
  );
}

export default App;
