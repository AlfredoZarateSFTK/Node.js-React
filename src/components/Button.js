import React from 'react';
import './Button.css';

const Button = ({ onClick, className, children }) => {
  return (
    <button 
      className={`calculator-key ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;