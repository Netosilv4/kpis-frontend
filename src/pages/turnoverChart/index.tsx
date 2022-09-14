import { ResponsiveLine } from '@nivo/line'
import { Box, TextField, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs'
import useCharts, { EnumCharts } from '../../hooks/useCharts'
import 'dayjs/locale/pt-br'
import Cards from '../../components/cards'
import useWindowSize from '../../hooks/useWindowSize'

const TurnoverChart = () => {
  const { data, dateRange, setDateRange } = useCharts(EnumCharts.turnoverChart)
  const { width } = useWindowSize()
  if (!data) return null

  const baseLine = [...data?.chartData.data as Array<any>].sort((a, b) => a.y - b.y)[0].y
  const isMobile = width && width < 600

  return (
        <div style={{ width: '100%', paddingTop: '40px' }}>
            <Box display='flex' gap={5} alignItems='center' flexWrap='wrap' justifyContent='space-between'>
            <Typography variant="h5" style={{ paddingBottom: '10px' }}>Análise Turnover</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
            <DatePicker
                views={['year']}
                label="Período"
                toolbarPlaceholder="Selecione o período"
                onChange={(value) => {
                  setDateRange(value as Dayjs)
                }}
                value={dateRange}
                renderInput={(params: any) => <TextField {...params} helperText={''} />}
            />
            </LocalizationProvider>
            </Box>
            <Cards chartData={data} />
            <div style={{ width: '100%', display: 'flex', height: '400px' }}>
            <ResponsiveLine
            data={[data.chartData]}
            margin={{ top: 20, right: !isMobile ? 100 : 20, bottom: !isMobile ? 30 : 0, left: !isMobile ? 40 : 0 }}
                yScale={{
                  type: 'linear',
                  min: 'auto',
                  max: 'auto',
                  stacked: true,
                  reverse: false,
                  nice: true,
                  clamp: false
                }}
                enableArea={true}
                areaBaselineValue={baseLine}
                animate={true}
                enableSlices="x"
                legends={[
                  {
                    anchor: 'top-right',
                    direction: 'column',
                    itemWidth: 80,
                    itemHeight: 20,
                    translateX: 100
                  }]
                }
                areaOpacity={0.5}
                enableCrosshair
            />
            </div>
        </div>
  )
}

export default TurnoverChart
