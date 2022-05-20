import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import history from '../../history';
import Typography from '@mui/material/Typography';
import AccessibleIcon from '@mui/icons-material/Accessible';

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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          HandIdea
        </Typography>
        <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AccessibleIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    );
  }
}
