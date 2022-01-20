import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IconContainer from './sideBarIcon.styled';

const SideBarIcon = ({ className, icon, color, onClick, title, hoverText, size = "sm"}) => {
  return (
    <IconContainer className={className}>
      <FontAwesomeIcon
        icon={icon}
        color={color}
        onClick={onClick}
        title={hoverText ? hoverText : title}
        size={size}
      />
      {icon ? <h3>{title}</h3>: <h3><span>#</span>{title}</h3>}
    </IconContainer>
  )
}

export default SideBarIcon
