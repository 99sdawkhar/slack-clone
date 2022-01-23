import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHistory, faInfoCircle,  } from '@fortawesome/free-solid-svg-icons';

import { useStateValue } from '../../StateProvider/StateProvider';

import HeaderStyle from './header.styled';

import userProfile from '../../assets/images//user-profile.jpg';

const Header = ({ openChat }) => {
  const [{ user }] = useStateValue();

  return (
    <HeaderStyle>
      {!openChat && <div className="header-left">
        <figure>
          <img src={user? user.photoURL : userProfile} alt={user?.displayName} />
        </figure>
      </div>
      }
      <div className="header-right">
        <FontAwesomeIcon
          icon={faHistory}
          title='History'
          size='1x'
        />
        <div className='header-search'>
          <input type="search" placeholder={'Search People'}/>
          <FontAwesomeIcon
            icon={faSearch}
            title='Search'
            size='1x'
          />
        </div>
        <FontAwesomeIcon
          icon={faInfoCircle}
          title='Help'
          size='1x'
          className='help'
        />
      </div>
    </HeaderStyle>
  )
}

export default Header
