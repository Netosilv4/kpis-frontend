import { Box } from '@mui/material'
import { useContext } from 'react'
import AppBar from '../../components/appbar'
import MiniDrawer from '../../components/drawer'
import { ContentContainer } from '../../components/drawer/styles'
import { DrawerContext } from '../../contexts/DrawerProvider'
import Chart from '../../components/chart'
import { EnumCharts } from '../../services/charts'

export default function Dashboard () {
  const { page } = useContext(DrawerContext)
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', width: '100%', overflowX: 'hidden' }}>
      <Box display='flex'>
        <AppBar />
        <MiniDrawer />
        <ContentContainer component="main">
          {
            page === 'HEADCOUNT' && <Chart type={EnumCharts.headCountChart} />
          }
          {
            page === 'TURNOVER' && <Chart type={EnumCharts.turnoverChart} />
          }
        </ContentContainer>
      </Box>
    </Box>
  )
}
