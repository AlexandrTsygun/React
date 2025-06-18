import "../ScssModuleComponent/ScssModuleComponent.scss";
// import "../Button/Button.scss"

export const Buttons = (props) => {
  return (
    <div className="container">
      <div className="wrapBtn">
        <button className="buttonNormal">{props.buttonText}</button>
        <button className="buttonHover">{props.buttonText}</button>
        <button className="buttonActive">{props.buttonText}</button>
      </div>
    </div>
  );
};

export const Cards = ({title, firstCardPrice, secondCardPrice, description, buttonText}) => {
  return (
    <div className="container">
      <div className="wrapCards">

        <div className="card">
          <h3 className="title">{title}</h3>
          <span className="price">{firstCardPrice}</span>
          <p className="description">{description}</p>
          <button className="cardButton">{buttonText}</button>
        </div>

        <div className="card">
          <h3 className="title">{title}</h3>
          <span className="price">{secondCardPrice}</span>
          <p className="description">{description}</p>
          <button className="cardButton">{buttonText}</button>
        </div>

      </div>
    </div>
  );
};