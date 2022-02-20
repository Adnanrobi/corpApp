import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import team from './team.png';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import robi from './robi.JPG'

function Header() {
  return (
      <div className='header'>
          <div className='header__left'>
              <img src={team} alt='' />
              <div className='header__search'>
                  <SearchIcon/> <input type="text"></input>
              </div>
          </div>
          <div className='header__right'>
              <HeaderOption Icon={ HomeIcon } title='Home' />
              <HeaderOption Icon={SupervisorAccountIcon} title='Connections' />
              <HeaderOption Icon={ChatBubbleIcon} title='Chat' />
              <HeaderOption Icon={NotificationsActiveIcon} title='Notification' />
              <HeaderOption avatar={robi} title="me" />
          </div>
      </div>
  )
}

export default Header