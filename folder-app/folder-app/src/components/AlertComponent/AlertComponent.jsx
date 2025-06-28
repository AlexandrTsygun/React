import React, {useState} from "react";
import './AlertComponent.scss'

export const Input1 = (props) => {
  const [state, setState] = useState("")

    return (
      <div>
        <input type="text" id="1" value={state} onChange={(e) => setState(e.target.value)}/>
        <p>{state}</p>
      </div>
    )
}







// function Alerts () {
//   const [typeAlert, setTypeAlert] = useState('')

//   const
// }