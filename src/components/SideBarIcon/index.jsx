import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IconContainer from './sideBarIcon.styled';
import { useNavigate } from 'react-router';
const SideBarIcon = ({ id, className, icon, color, onClick, title, hoverText, size = "sm"}) => {
  
  const navigate = useNavigate();
  const selectChannel = () => {
    navigate(`/rooms/${id}`);
  }
  
  return (
    <IconContainer
      className={className}
      onClick={onClick ? onClick : selectChannel}  
    >
      {icon ? 
        <>
          <FontAwesomeIcon
            icon={icon}
            color={color}
            title={hoverText ? hoverText : title}
            size={size}
          />
          <h3>{title}</h3>
        </>: (
        <>
          <span>#</span>
          <h3>{title}</h3>
        </>
        )
      }
    </IconContainer>
  )
}

export default SideBarIcon
