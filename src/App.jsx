import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import "./styles/Gameboard.css";
import Gameboard from "./components/Gameboard";
// import './App.css'

function App() {
  return(
    <>
      {/* <Header /> */}
      <Gameboard />
    </>
  )
}

export default App;
