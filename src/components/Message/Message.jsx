import React from 'react';
import MessageContainer from './message.styled';

const Message = ({ userImage, user, message, timestamp }) => {
  return (
    <MessageContainer>
      <figure>
          <img src={userImage} alt="User Dp" />
      </figure>
      <div className="content">
        <div className="user-data">
          <h4>{user}</h4>
          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </div>
        <p>{message}</p>
      </div>
    </MessageContainer>
  );
};

export default Message;
