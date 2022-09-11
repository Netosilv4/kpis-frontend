import { IconButton, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { useContext } from 'react';
import { DrawerContext } from '../../contexts/DrawerProvider';
import StyledAppBar from './styles';
import MenuIcon from '@mui/icons-material/Menu';

const AppBar = () => {
    const { handleDrawerOpen, open } = useContext(DrawerContext)
    return (
        <StyledAppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Key People Insights - Dashboard
          </Typography>
        </Toolbar>
      </StyledAppBar>
    )
}

export default AppBar