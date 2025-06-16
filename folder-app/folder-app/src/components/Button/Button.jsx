
import "./Button.css"


// const Button = (props) => {
//     return (
//       <button className="buttonColor">
//           {props.buttonText}
//       </button>
//     )
// }

// export default Button

export  const Card = (props) => {
  return (
  <div>
    <div className="wrap">
      <h2 className="h2">{props.h2}</h2>
      <p className="p">{props.p}</p>
    </div>
  </div>
  )
}

// npx create-react-app folder-name
