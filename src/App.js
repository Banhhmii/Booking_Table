import React from "react"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Menu from "./components/Menu"
import './App.css';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Main />
        <Menu />
      </>
    </BrowserRouter>
  );
}

export default App;
