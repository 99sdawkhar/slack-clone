import React from 'react';

import MessageContainer from './message.styled';

const Message = ({ userImage, user, message, timestamp }) => {
  return (
    <MessageContainer>
      <figure>
          <img src={userImage ? userImage : 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-21.jpg'} />
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
