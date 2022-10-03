import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";
import { Button } from 'react-bootstrap'

import Auth from '../../utils/auth';

function Header() {
  const navigate = useNavigate();
  function showLogout() {
    if (Auth.loggedIn()) {
      return (
        <Button
          variant='outline-warning'
          className='text-primary m-2'
          onClick={(event) => {
          Auth.logout();
          navigate('/', { replace: true })
        }}>Logout</Button>
      )
    }
  }

  return (
    <header className='border-bottom border-white'>
      <h1 className='m-2'>
          <span style={{ color: "#e53238" }}>e</span>
          <span style={{ color: "#0064D3" }}>b</span>
          <span style={{ color: "#f5af02" }}>a</span>
          <span style={{ color: "#86B817" }}>y</span>
          <span style={{ color: "#0064D3" }}>Buddy</span>
      </h1>
      {showLogout()}
    </header>
  );
}

export default Header;