import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../css/login.css'
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })} className="logout-btn">
      Log Out
    </button>
  );
};

export default LogoutButton;