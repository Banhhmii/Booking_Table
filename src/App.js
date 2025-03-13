import React from "react"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import './App.css';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Main />
        <Menu />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
