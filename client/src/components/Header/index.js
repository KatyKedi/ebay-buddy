import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Auth from '../../utils/auth';

import { Button } from 'react-bootstrap'
import "./style.css";


function Header() {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(<></>)

  useEffect(() => {
    Auth.loggedIn() ? setShowLogout(
      <Button
        variant='outline-warning'
        className='text-primary m-2'
        onClick={() => {
          Auth.logout();
          navigate('/')
        }}
      >Logout</Button>) :
      setShowLogout(<></>)
  }, [Auth])


  return (
    <header className='border-bottom border-white'>
      <h1
        className='m-2'
        onClick={() => navigate('/')}
      >
        <span style={{ color: "#e53238" }}>e</span>
        <span style={{ color: "#0064D3" }}>b</span>
        <span style={{ color: "#f5af02" }}>a</span>
        <span style={{ color: "#86B817" }}>y</span>
        <span style={{ color: "#0064D3" }}>Buddy</span>
      </h1>
      {showLogout}
    </header>
  );
}

export default Header;