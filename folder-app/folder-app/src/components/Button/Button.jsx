import './Button.scss'

export const Button = ({buttonScss, buttonText}) => {
  return (

    <div>

      <button className="buttonScss">{buttonScss}
        <span className='buttonText'>{buttonText}</span>
        </button>

    </div>

  )
}
