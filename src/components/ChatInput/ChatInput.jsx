import React, { useState } from 'react';
import InputComponent from './chat-input.styled';

const ChatInput = ({ channelName, channelId}) => {
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      alert('as');
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
