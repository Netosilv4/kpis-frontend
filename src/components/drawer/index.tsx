import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { DrawerContext } from '../../contexts/DrawerProvider';
import { DrawerHeader, StyledDrawer } from './styles';
import { Logout, BarChart, ShowChart } from '@mui/icons-material';
import { AuthContext } from '../../contexts/AuthProvider';


export default function MiniDrawer() {
  const { open, handleDrawerClose, setPage } = React.useContext(DrawerContext)
  const { logout } = React.useContext(AuthContext)

  const DRAWER_ITEMS = [
    {
      text: "Análise HeadCount",
      icon: <BarChart />,
      onClick: () => setPage("HEADCOUNT")
    },
    {
      text: "Análise turnover",
      icon: <ShowChart />,
      onClick: () => setPage("TURNOVER")
    }
  ]

  const DRAWER_SYSTEM_ITEMS = [
    {
      text: "Logout",
      icon: <Logout />,
      onClick: logout
    }
  ]

  const theme = useTheme();

  return (
      <StyledDrawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {DRAWER_ITEMS.map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={item.onClick}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {DRAWER_SYSTEM_ITEMS.map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={item.onClick}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
  );
}
