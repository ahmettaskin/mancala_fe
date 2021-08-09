import logo from './logo.svg';
import './App.css';
import Game from "./components/Game";
import Login from "./pages/Login";
import {useState} from "react";

function App() {

  const isAuth = localStorage.getItem("token")

  return (
    <div className="App">
      <>
        {!isAuth && <Login/>}
        {isAuth && <Game/>}
      </>
    </div>
  );
}

export default App;
