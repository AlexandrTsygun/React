import React from 'react';
import './CustomInput.scss';

const CustomInput = ({ theme = 'light', label, ...props }) => {
  return (
    <div className={`input-container ${theme}`}>
      {label && <label className="input-label">{label}</label>}
      <input
        className={`input-field ${theme}`}
        {...props}
      />
    </div>
  );
};

export default CustomInput;