import React from 'react'
import '../css/header.css'
import { signOut } from "firebase/auth";
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log('User signed out');
      navigate('/login');
    }).catch((error) => {
      console.error('Error signing out:', error.message);
    });
  };

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
        <div className='sign-in' onClick={handleSignOut}>Sign out</div>
        {<img
            className='header-avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='user avatar'
        />}   
    </div>
  )
}
