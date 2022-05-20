import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import history from '../../history';

export default class ButtonAppBar extends React.Component {
  render() {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon/>
          </IconButton>
        <Button color="inherit" onClick={() => window.location.href = "../../Login/index.js" }>Login</Button>
        <Button color="inherit" onClick={() => history.push('../Categories')}>Categories</Button>
        </Toolbar>
      </AppBar>
    </Box>
    );
  }
}
