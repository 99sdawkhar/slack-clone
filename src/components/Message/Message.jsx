import React from 'react';

import MessageContainer from './message.styled';

import userProfile from '../../assets/images/user-profile.jpg';

const Message = ({ userImage, user, message, timestamp }) => {
  return (
    <MessageContainer>
      <figure>
        <img src={userImage ? userImage : userProfile} alt="user profile" />
      </figure>
      <div className="content">
        <div className="user-data">
          <h4>{user}</h4>
          <span>{new Date(timestamp?.toDate()).toLocaleString()}</span>
        </div>
        <p>{message}</p>
      </div>
    </MessageContainer>
  );
};

export default Message;
