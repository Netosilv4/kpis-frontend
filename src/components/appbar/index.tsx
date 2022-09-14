import { Box, IconButton, Typography } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import { useContext } from 'react'
import { DrawerContext } from '../../contexts/DrawerProvider'
import StyledAppBar from './styles'
import MenuIcon from '@mui/icons-material/Menu'
import { AuthContext } from '../../contexts/AuthProvider'
import { Person } from '@mui/icons-material'
import useWindowSize from '../../hooks/useWindowSize'

const AppBar = () => {
  const { handleDrawerOpen, open } = useContext(DrawerContext)
  const { user } = useContext(AuthContext)
  const { width } = useWindowSize()
  return (
    <StyledAppBar position="fixed" open={open}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' })
            }}
          >
            <MenuIcon />
          </IconButton>
          {
            width && width > 600 && (
              <Typography variant="h6" noWrap component="div">
                  Key People Insights - Dashboard
              </Typography>
            )
          }
        </Box>
        <Box style={{ alignItems: 'center', display: 'flex', gap: '10px' }}>
          <Person />
          <Typography>
            {user?.nome}
          </Typography>
        </Box>
      </Toolbar>
    </StyledAppBar>
  )
}

export default AppBar
