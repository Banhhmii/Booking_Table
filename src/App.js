import React from "react"
import Nav from "./components/Nav"
import Main from "./components/Main"
import './App.css';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Main />
      </>
    </BrowserRouter>
  );
}

export default App;
