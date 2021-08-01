import Header from "./Header";
import Board from "./Board";
import {useEffect, useState} from "react";
import axios from "axios";

function Game() {

  let config = {
    headers: {
      'Authorization': 'Bearer ' + "validToken()"
    }
  }

  const [data, setData] = useState(null)
  const apiUrl = process.env.REACT_APP_MANCALA_API_URL

  useEffect(async () => {
    let result = await axios.post(apiUrl + "/game", config)
    setData(result.data)
    console.log(result)
  }, [])

  const makeMove = async (index) => {
    let result = await axios.post(apiUrl + "/sow", {
      ...config,
      gameId: "gameId",
      index: index,
      playerEnm: data.playerTurn
    })
    setData(result.data)
    console.log(result)

  }

  return (
    <>
      {
        data && <>
          <Header playerTurn={data.playerTurn}/>
          <Board board={data.board} onClick={(index) => makeMove(index)} playerA={data.player1} playerB={data.player2}/>
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