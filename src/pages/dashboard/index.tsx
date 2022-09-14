import { Box } from '@mui/material'
import { useContext } from 'react'
import AppBar from '../../components/appbar'
import MiniDrawer from '../../components/drawer'
import { ContentContainer, DrawerHeader } from '../../components/drawer/styles'
import HeadCounterChart from '../../components/headCountChart'
import TurnoverChart from '../../components/turnoverChart'
import { DrawerContext } from '../../contexts/DrawerProvider'

export default function Dashboard () {
  const { page } = useContext(DrawerContext)
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', width: '100%', overflowX: 'hidden' }}>
      <Box display='flex'>
        <AppBar />
        <MiniDrawer />
          <ContentContainer component="main">
                {
                  page === 'HEADCOUNT' && <HeadCounterChart />
                }
                {
                  page === 'TURNOVER' && <TurnoverChart />
                }
          </ContentContainer>
      </Box>
    </Box>
  )
}
