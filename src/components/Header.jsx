import React from 'react'
import '../css/header.css'

export default function Header() {
  return (
    <div className='header'>
        <img 
            className='header-logo'
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
            alt='logo'
        />

        <div className='header-option'>
            <span>Home</span>
            <span>TV Shows</span>
            <span>Movies</span>
            <span>News & Popular</span>
            <span>My list</span>
            <span>Browse by Language</span>
        </div> 

        {<img
            className='header-avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='user avatar'
        />}   
    </div>
  )
}
