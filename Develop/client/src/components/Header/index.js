import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";

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
      <p onClick={(event) => navigate('/', { replace: true })}>Login | Sign Up</p>
    </header>
  );
}

export default Header;