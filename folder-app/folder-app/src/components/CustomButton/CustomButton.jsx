import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ theme, text, icon, ...props }) => (
  <button className={`custom-button ${theme} ${icon ? 'with-icon' : ''}`} {...props}>
    {icon === 'google' && <span className="google-icon">G</span>}
    {text}
  </button>
);

export default CustomButton;

