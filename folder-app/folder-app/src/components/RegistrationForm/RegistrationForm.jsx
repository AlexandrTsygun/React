import React, { useState } from 'react';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import './RegistrationForm.scss';

const RegistrationForm = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <form className={`registration-form ${theme}`} onSubmit={handleSubmit}>

    <div className='form-info'>
      <h2 className='title-form'>Create an account</h2>
      <p className='desc-form'>Let’s get started with your 30 days free trial</p>
    </div>

    <div className='wrap-input'>
      <CustomInput
        name="name"
        type="text"
        placeholder="Введите ваше имя"
        value={formData.name}
        onChange={handleChange}
        theme={theme}
      />
      <CustomInput
        name="email"
        type="email"
        placeholder="Введите Email"
        value={formData.email}
        onChange={handleChange}
        theme={theme}
      />
      <CustomInput
        name="password"
        type="password"
        placeholder="Введите пароль"
        value={formData.password}
        onChange={handleChange}
        theme={theme}
      />
    </div>

    <div className='wrap-button'>
      <CustomButton
        type="submit"
        text="Create Account"
        theme={theme}
      />
      <CustomButton
        text="Sign up with Google"
        icon="google"
        theme={theme}
      />
    </div>

      <p className="login-link">
        Already have an account? <a href="#">Sign In</a>
      </p>
    </form>
  );
};

export default RegistrationForm;