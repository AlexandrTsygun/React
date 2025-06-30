import './LeftRegistrationForm.scss';
import avatar from '../IconComponent/avatar.png';

const LeftRegistrationForm = ({ theme }) => {
  return (
    <div className={`left-panel ${theme}`}>
      <div className="image-with-text">
        <img className="panel-img"
          src={avatar}
          alt=""
        />
        <div className="text-in-img">
          <div className="top-content__img"><span className="logo">abc.com</span></div>

          <div className='center-content__img'>
            <p className="center-content__item">
              abc.com is the best place to find remote talent.
              We are working in the impress by the quality of applicants.
            </p>
          </div>

          <div className="bottom-content__img">
            <p className="bottom-content__item">Madhushan Sasanka</p>
            <p className="bottom-content__item">CEO, abc.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftRegistrationForm;