import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHistory, faInfoCircle,  } from '@fortawesome/free-solid-svg-icons';
import HeaderStyle from './header.styled';

const Header = () => {
  return (
    <HeaderStyle>
      <div className="wrapper">
        <FontAwesomeIcon
          icon={faHistory}
          // color={color}
          // onClick={onClick}
          title='History'
          size='1x'
        />
        <div className='header-search'>
          <input type="search" placeholder={'Search People'}/>
          <FontAwesomeIcon
            icon={faSearch}
            // color={color}
            // onClick={onClick}
            title='Search'
            size='1x'
          />
        </div>
        <FontAwesomeIcon
          icon={faInfoCircle}
          // color={color}
          // onClick={onClick}
          title='Help'
          size='1x'
          className='help'
        />
      </div>
    </HeaderStyle>
  )
}

export default Header
