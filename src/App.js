import logo from './logo.svg';
import './App.css';
import Game from "./components/Game";

function App() {

  const isAuth = localStorage.getItem("token")

  return (
    <div className="App">
      {
        isAuth && <Game/>
      }
      {
        !isAuth && <Login/>
      }
    </div>
  );
}

export default App;
