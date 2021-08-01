import Pit from "./Pit";

function Board(props) {

  return (
    <div>
      <div className="playerA">
        {props.playerA.name}
      </div>

      <div className="board">
        <div className="playerALargerPit">
          {props.board.playerALargerPit}
        </div>
        <div className="playerPits">
          <div className="playerAPits">
            {
              props.board.playerAPits.map((item, index) => {
                return (
                  <Pit index={index} value={item} onClick={(index) => props.onClick(index)}/>
                )
              })
            }

          </div>
          <div className="line">

          </div>
          <div className="playerBPits">
            {
              props.board.playerBPits.map((item, index) => {
                return (
                  <Pit index={index} value={item} onClick={(index) => props.onClick(index)}/>
                )
              })
            }
          </div>
        </div>
        <div className="playerBLargerPit">
          {props.board.playerBLargerPit}
        </div>
      </div>

      <div className="playerB">
        {props.playerB.name}
      </div>
    </div>
  )

}

export default Board;

