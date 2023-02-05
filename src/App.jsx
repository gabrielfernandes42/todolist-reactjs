import { useState } from "react";
import "./App.css";
import Footer from "./assets/components/Footer/Footer";
import Header from "./assets/components/Header/Header";
import ListItems from "./assets/components/ListItems/ListItems";

function App() {
  return (
    <div className="App">
      <Header />
      <ListItems />
      <Footer />
    </div>
  );
}

export default App;
