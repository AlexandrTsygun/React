import './Button.scss'

export const Button = ({ buttonText }) => {
  return (

    <div>

      <button className="buttonScss">
        <span className='buttonText'>{buttonText}</span>
        </button>

    </div>

  )
}
