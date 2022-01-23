import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from '@firebase/firestore';

import db from '../../firebase';

import InputComponent from './chat-input.styled';
import { useStateValue } from '../../StateProvider/StateProvider';

import userProfile from '../../assets/images/user-profile.jpg';

const ChatInput = ({ channelName, roomId}) => {
  const [input, setInput] = useState('');

  const [{ user }] = useStateValue();

  const sendMessage = async (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      const roomsCollectionRef = collection(db, "rooms", roomId, "messages");
      try {
        if (roomId) {
          setInput('');
          await addDoc(roomsCollectionRef, {
            message: input,
            username: user?.displayName,
            userImage: user? user.photoURL : userProfile,
            timestamp: serverTimestamp(),
          });
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <InputComponent>
      <form>
        <textarea
          placeholder={`Message ${channelName}`} 
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={sendMessage}
          value={input}
        ></textarea>
      </form>
    </InputComponent> 
  );
};

export default ChatInput;
