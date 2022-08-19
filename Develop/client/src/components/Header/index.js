import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";

import Auth from '../../utils/auth';

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <h1>
          <span style={{ color: "#e53238" }}>e</span>
          <span style={{ color: "#0064D3" }}>b</span>
          <span style={{ color: "#f5af02" }}>a</span>
          <span style={{ color: "#86B817" }}>y</span>
          <span style={{ color: "#0064D3" }}>Buddy</span>
      </h1>
      <p onClick={(event) => {
        Auth.logout();
        navigate('/', { replace: true })
      }}>Logout</p>
    </header>
  );
}

export default Header;