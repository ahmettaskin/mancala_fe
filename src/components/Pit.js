
function Pit(props) {

  return(
    <div onClick={()=> props.onClick(props.index)} className="pit">
      {props.value}
    </div>
  )

}

export default Pit;