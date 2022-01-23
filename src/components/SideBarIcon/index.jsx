import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import IconContainer from './sideBarIcon.styled';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const SideBarIcon = ({ id, className, icon, color, onClick, title, hoverText, openChat, setOpenChat,size = "sm",}) => {
  const navigate = useNavigate();

  const { width } = useWindowDimensions();

  const selectChannel = () => {
    if (width < 541) {
      setOpenChat(true);
    }
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
