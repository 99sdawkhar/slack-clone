import React, { useState, useEffect } from 'react'
import { faComment, faInbox, faEnvelopeOpenText, faSave, faGripVertical, faPlusSquare, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { collection, addDoc, query, onSnapshot } from 'firebase/firestore';

import db from '../../firebase.js';

import { useStateValue } from '../../StateProvider/StateProvider';

import SideBarIcon from '../SideBarIcon';
import SideBarContainer from './sidebar.styled';

const SideBar = ({ setOpenChat, openChat }) => {
  const [{ user }] = useStateValue();
  const [channels, setChannels] = useState([]);

  const roomsCollectionRef = collection(db, 'rooms');

  const addNewChannel = async () => {
    const channelName = prompt('Please enter channel name');
    if (channelName) {
      await addDoc(roomsCollectionRef, {name: channelName})
    }
  }

  useEffect(() => {
    const msgColl = query(roomsCollectionRef);
    onSnapshot(msgColl, (data) => {
      setChannels(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SideBarContainer>
      <div className="user-info">
        <h2>{user?.displayName?.split(' ')?.slice(0, -1)?.join(' ')}</h2>
        <SideBarIcon 
          icon={faSignOutAlt}
          hoverText="Sign Out"
          className="user-edit"
          onClick={() => {
            let isExecuted = window.confirm("Are you sure you want to sign out?");
            if (isExecuted) {
              localStorage.removeItem("userInfo");
              window.location.reload();
            }
          }}
        />
      </div>
      <div className="channel-list">
        <SideBarIcon 
            icon={faComment}
            title="Threads"
            onClick={() => alert('Threads')}
        />
        <SideBarIcon 
            icon={faInbox}
            title="All DMs"
            onClick={() => alert('All DMs')}
        />
        <SideBarIcon 
            icon={faEnvelopeOpenText}
            title="Mentions &amp; reactions"
            onClick={() => alert('Mentions & reactions')}
        />
        <SideBarIcon 
            icon={faSave}
            title="Saved items"
            onClick={() => alert('Saved items')}
        />
        <SideBarIcon 
            icon={faGripVertical}
            title="More"
            onClick={() => alert('More')}
        />
        <SideBarIcon 
            icon={faPlusSquare}
            title="Add Channel"
            onClick={addNewChannel}
            className="add-channel"
        />
      {channels?.map((channel) => {
          return (
            <SideBarIcon
              key={channel.id}
              title={channel.name}
              id={channel.id}
              setOpenChat={setOpenChat}
              openChat={openChat}
            />
          )
        })}
      </div> 
    </SideBarContainer>
  )
}

export default SideBar
