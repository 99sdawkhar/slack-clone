import React, { useEffect, useState } from 'react';
import { collection, addDoc, serverTimestamp, updateDoc } from '@firebase/firestore';

import db from '../../firebase';

import InputComponent from './chat-input.styled';
import { useStateValue } from '../../StateProvider/StateProvider';

import userProfile from '../../assets/images/user-profile.jpg';
import Button from '../Button/Button';

const ChatInput = ({ channelName, roomId , msg, msgId, setIsEditing, isEditing }) => {
  const [input, setInput] = useState('');

  const [{ user }] = useStateValue();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const sendMessage = async (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      const roomsCollectionRef = collection(db, "rooms", roomId, "messages");
      try {
        if (roomId) {
          if (input !== '') {
            if (!isEditing) {
              setInput('');
              await addDoc(roomsCollectionRef, {
                message: input.trim(),
                username: user?.displayName,
                userImage: user? user.photoURL : userProfile,
                email: userInfo?.email,
                timestamp: serverTimestamp(),
              });
            }
          }
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  const updateMessage = async (e) => {
    e.preventDefault();
    try {
      if (roomId) {
        if (input !== '') {
          if (isEditing) {
            await updateDoc(msgId, {
              message: input.trim(),
              isEdited: true,
              updateTime: serverTimestamp(),
            });
          }
          setIsEditing(false);
        }
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (msg) {
      setInput(msg);
    }
  }, [msg])

  return (
    <InputComponent>
      <form>
        <textarea
          placeholder={`Message ${channelName? channelName : ''}`} 
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={sendMessage}
          value={input}
        ></textarea>
        {msg && (
          <div className="message-box">
            <Button className="cancel" onClick={() => setIsEditing(false)}>Cancel</Button>
            <Button type="button" className="save" onClick={(e) => updateMessage(e)}>Save</Button>
          </div>
        )}
      </form>
    </InputComponent> 
  );
};

export default ChatInput;
