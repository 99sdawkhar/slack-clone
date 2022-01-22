import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faStar  } from '@fortawesome/free-solid-svg-icons';

import ChatContainer from './chat.styled';

import db from '../../firebase.js';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore/lite';
import Message from '../Message/Message';
import MessageContainer from '../Message/message.styled';
import ChatInput from '../ChatInput/ChatInput';

const Chat = () => {
  const { roomId } = useParams();

  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    const getRoomsDetails = async (id) => {
      const roomDocRef = doc(db, 'rooms', id);
      const data = await getDocs(roomDocRef)
        .then((d) => {
          setRoomDetails(d.data());
        })
    }
    getRoomsDetails(roomId);

    // TODO: display messages in asc order from db
    // setRoomMessages()
  }, [roomId])

  return (
    <ChatContainer>
      <div className="header">
        <div className="header-left">
          <h3># general{roomDetails?.name}</h3>
          <FontAwesomeIcon
            icon={faStar}
            title='Star'
            size='1x'
          />
        </div>
        <div className="header-right">
          <FontAwesomeIcon
            icon={faInfoCircle}
            // color={color}
            // onClick={onClick}
            title='Detail'
            size='1x'
          />
          <span>Details</span>
        </div>
      </div>
      <div className="chat-body">
        {/* {roomMessages?.map((messageBody) => {
          <Message
            userImage ={messageBody.userImage}
            user={messageBody.user}
            message={messageBody.message}
            timestamp={messageBody.timestamp}
          />
        })} */}
        <MessageContainer>
          <figure>
              <img src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-21.jpg" alt="User Dp" />
          </figure>
          <div className="content">
            <div className="user-data">
              <h4>Shubham D</h4>
              <span>12:20</span>
            </div>
            <p>Hello Bro Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, recusandae voluptas. Voluptatibus dicta obcaecati earum, molestiae at adipisci error sit excepturi voluptatem esse, ipsum alias, iste omnis soluta sint aperiam neque ipsa possimus amet ipsam! Placeat possimus, ex quisquam aperiam alias officia dolor omnis ad? Quas esse, blanditiis culpa pariatur fuga voluptate veniam debitis nisi, id soluta, consectetur nemo necessitatibus assumenda labore at? Maxime eveniet consequatur aliquid, totam exercitationem esse facilis deleniti illum, voluptates similique iusto libero. Fuga laudantium magnam facilis nemo a magni esse veniam, dolor id neque dolorem obcaecati recusandae, molestiae expedita officiis praesentium numquam? Libero, error doloremque.</p>
          </div>
        </MessageContainer>
        <ChatInput
          channelName={roomDetails?.name}
          channelId={roomId}
        />
      </div>
    </ChatContainer>
  );
};

export default Chat;
