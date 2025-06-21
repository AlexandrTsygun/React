import './Card.scss'
export const Card = ({title, price, description, buttonText}) => {
 return (
        <div className="card">
          <h3 className="title">{title}</h3>
          <span className="price">{price}</span>
          <p className="description">{description}</p>
          <button className="cardButton">{buttonText}</button>
        </div>
  )
}
