import Header from "./Header";
import Board from "./Board";
import {useEffect, useState} from "react";
import axios from "axios";

function Game() {

  let config = {
    headers: {
      'Authorization': 'Bearer ' + sessionStorage.getItem("token")
    }
  }

  const [data, setData] = useState(null)
  const apiUrl = process.env.REACT_APP_MANCALA_API_URL

  useEffect(async () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer xsasasdasd'
    }

    let result = await axios.post(apiUrl + "/game", {}, {
      headers: {Authorization: "Bearer " + sessionStorage.getItem("token")}
    })
    setData(result.data)
    sessionStorage.setItem("gameId", result.data.id)
  }, [])

  const makeMove = async (index) => {
    let result = await axios.post(apiUrl + "/game/" + sessionStorage.getItem("gameId") + "/sow", {
      pitIndex: index,
      currentPlayer: data.nextPlayer
    }, {
      headers: {Authorization: "Bearer " + sessionStorage.getItem("token")}
    })
    setData(result.data)
  }

  return (
    <>
      {
        data && <>
          <Header playerTurn={data.nextPlayer}/>
          <h1> Player A</h1>
          <Board board={data.board} onClick={(index) => makeMove(index)} playerA={data.playerA} playerB={data.playerB}/>
          <h1> Player B</h1>
          <h1>Game Status: {data.gameStatus}</h1>
        </>
      }
    </>
  )


}

export default Game;

// {
//   "player1": {
//   "name": null
// },
//   "player2": {
//   "name": null
// },
//   "board": {
//   "id": null,
//     "playerAPits": [
//     6,
//     6,
//     6,
//     6,
//     6,
//     6
//   ],
//     "playerALargerPit": 0,
//     "playerBPits": [
//     6,
//     6,
//     6,
//     6,
//     6,
//     6
//   ],
//     "playerBLargerPit": 0
// },
//   "playerTurn": null
// }