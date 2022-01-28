import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faStar,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import {
  collection,
  doc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

import db from "../../firebase.js";

import ChatInput from "../ChatInput/ChatInput";
import Message from "../Message/Message";
import Button from "../Button/Button";

import useWindowDimensions from "../../hooks/useWindowDimensions.js";
import ChatContainer from "./chat.styled";

const Chat = ({ setOpenChat, openChat }) => {
  const { roomId } = useParams();
  const { width } = useWindowDimensions();

  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  useEffect(() => {
    if (roomId) {
      onSnapshot(doc(db, "rooms", roomId), (document) => {
        setRoomDetails(document.data());
      });

      const msgColl = query(
        collection(db, "rooms", roomId, "messages"),
        orderBy("timestamp")
      );
      onSnapshot(msgColl, (querySnapshot) => {
        setRoomMessages(
          querySnapshot.docs.map((msg) => ({ ...msg.data(), id: msg.id }))
        );
      });
    }
  }, [roomId]);

  return (
    <ChatContainer>
      <div className="header">
        {width < 541 && openChat && (
          <Button className="back-arrow" onClick={() => setOpenChat(!openChat)}>
            <FontAwesomeIcon icon={faChevronLeft} title="Star" size="2x" />
          </Button>
        )}
        <div className="header-left">
          <h3># {roomDetails?.name}</h3>
          <FontAwesomeIcon icon={faStar} title="Star" size="xs" />
        </div>
        <div className="header-right">
          <FontAwesomeIcon
            icon={faInfoCircle}
            title="This is detail section"
            size="1x"
          />
          <span>Details</span>
        </div>
      </div>
      <div className="chat-body">
        <ul className="chat-data">
          {roomMessages?.map(
            ({ userImage, username, message, timestamp, id, isEdited, email }) => (
              <Message
                key={id}
                userImage={userImage}
                username={username}
                message={message}
                timestamp={timestamp}
                isEdited={isEdited}
                email={email}
                docId={id}
              />
            )
          )}
          <AlwaysScrollToBottom />
        </ul>
        <ChatInput channelName={roomDetails?.name} roomId={roomId} />
      </div>
    </ChatContainer>
  );
};

export default Chat;
