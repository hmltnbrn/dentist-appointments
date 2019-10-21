import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import './Header.scss';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <h1>Dentist Appointments</h1>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
