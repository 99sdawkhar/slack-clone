import React from 'react'
import { faEdit, faComment, faInbox, faEnvelopeOpenText, faSave, faGripVertical } from '@fortawesome/free-solid-svg-icons';

import SideBarIcon from '../SideBarIcon';
import SideBarContainer from './sidebar.styled';
const SideBar = () => {
  return (
    <SideBarContainer>
      <div className="user-info">
        <h2>People</h2>
        <SideBarIcon 
          icon={faEdit}
          hoverText="New message"
          className="user-edit"
        />
      </div>
      <div className="top-section">
        <SideBarIcon 
            icon={faComment}
            // color={theme.colors.PRIMARY_COLOR}
            // onClick={(e) => handleInfoClick(e, keyValue)}
            // size="lg"
            title="Threads"
        />
        <SideBarIcon 
            icon={faInbox}
            // color={theme.colors.PRIMARY_COLOR}
            // onClick={(e) => handleInfoClick(e, keyValue)}
            // size="lg"
            title="All DMs"
        />
        <SideBarIcon 
            icon={faEnvelopeOpenText}
            // color={theme.colors.PRIMARY_COLOR}
            // onClick={(e) => handleInfoClick(e, keyValue)}
            // size="lg"
            title="Mentions &amp; reactions"
        />
        <SideBarIcon 
            icon={faSave}
            // color={theme.colors.PRIMARY_COLOR}
            // onClick={(e) => handleInfoClick(e, keyValue)}
            // size="lg"
            title="Saved items"
        />
        <SideBarIcon 
            icon={faGripVertical}
            // color={theme.colors.PRIMARY_COLOR}
            // onClick={(e) => handleInfoClick(e, keyValue)}
            // size="lg"
            title="More"
        />
      </div>
    </SideBarContainer>
  )
}

export default SideBar
