import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from '@firebase/firestore';

import db from '../../firebase';

import InputComponent from './chat-input.styled';
import { useStateValue } from '../../StateProvider/StateProvider';

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
            userImage: user? user.photoURL : 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-21.jpg',
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
