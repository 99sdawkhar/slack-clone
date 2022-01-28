import React, { useState } from 'react';
import { doc, deleteDoc } from '@firebase/firestore';
import { useParams } from 'react-router';

import db from '../../firebase';

import MoreOptions from '../MoreOptions/MoreOptions';
import Button from '../Button/Button';

import MessageContainer from './message.styled';
import userProfile from '../../assets/images/user-profile.jpg';
import ChatInput from '../ChatInput/ChatInput';

const Message = ({ userImage, username, message, timestamp, docId, isEdited, email }) => {
  const { roomId } = useParams();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  
  const [isEditing, setIsEditing] = useState(false);

  const taskDocRef = doc(db, 'rooms', roomId, 'messages', docId);
  
  const deleteMessage = async () => {
    try {
      await deleteDoc(taskDocRef)
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <MessageContainer>
      <figure>
        <img src={userImage ? userImage : userProfile} alt="user profile" />
      </figure>
      <div className="content">
        <div className="user-data">
          <h4>{username}</h4>
          <div className="helper-txt">
            <span>{new Date(timestamp?.toDate()).toLocaleString()}</span>
            {isEdited ? <span className="edited">Edited</span> : null}
          </div>
        </div>
        {
          isEditing ? 
          <ChatInput roomId={roomId} msgId={taskDocRef} msg={message} isEditing={isEditing} setIsEditing={setIsEditing} /> :
          <p>{message}</p>
        }
      </div>
      {userInfo.email === email ? 
        !isEditing && <MoreOptions>
          <Button className="edit" onClick={() => setIsEditing(true)}>Edit</Button>
          <Button className="delete" onClick={deleteMessage}>Delete</Button>
        </MoreOptions>
      : null}
    </MessageContainer>
  );
};

export default Message;
