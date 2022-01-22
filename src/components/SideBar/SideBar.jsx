import React, { useState, useEffect } from 'react'
import { faEdit, faComment, faInbox, faEnvelopeOpenText, faSave, faGripVertical, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import SideBarIcon from '../SideBarIcon';
import SideBarContainer from './sidebar.styled';

import db from '../../firebase.js';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { useStateValue } from '../../StateProvider/StateProvider';

const SideBar = () => {
  
  const [{ user }] = useStateValue();

  const [channels, setChannels] = useState([]);

  const roomsCollection = collection(db, 'rooms');

  const addNewChannel = async () => {
    const channelName = prompt('Please enter channel name');
    if (channelName) {
      await db.addDoc(roomsCollection, {name: channelName})
    }
  }

  useEffect(() => {
    const getRooms = async () => {
      const data = await getDocs(roomsCollection);
      setChannels(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getRooms();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[channels])

  return (
    <SideBarContainer>
      <div className="user-info">
        <h2>{user?.displayName}</h2>
        <SideBarIcon 
          icon={faEdit}
          hoverText="New message"
          className="user-edit"
          onClick={() => alert('Hello')}
        />
      </div>
      <div className="top-section">
        <SideBarIcon 
            icon={faComment}
            // color={theme.colors.PRIMARY_COLOR}
            // onClick={(e) => handleInfoClick(e, keyValue)}
            // size="lg"
            title="Threads"
        />
        <SideBarIcon 
            icon={faInbox}
            title="All DMs"
        />
        <SideBarIcon 
            icon={faEnvelopeOpenText}
            title="Mentions &amp; reactions"
        />
        <SideBarIcon 
            icon={faSave}
            title="Saved items"
        />
        <SideBarIcon 
            icon={faGripVertical}
            title="More"
        />
        <SideBarIcon 
            icon={faPlusSquare}
            title="Add Channel"
            onClick={addNewChannel}
        />
      </div>
      {channels?.map((channel) => {
          return (
            <SideBarIcon 
              key={channel.id}
              title={channel.name}
              id={'sxy'}
            />
          )
        })}
    </SideBarContainer>
  )
}

export default SideBar
