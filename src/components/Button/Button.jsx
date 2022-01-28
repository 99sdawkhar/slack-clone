import React from 'react';
import ButtonStyle from './button.styled';

const Button = ({ className, onClick, onKeyDown, type, children}) => {
  return (
    <ButtonStyle className={className} onKeyDown={onKeyDown} onClick={onClick} type={type}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
