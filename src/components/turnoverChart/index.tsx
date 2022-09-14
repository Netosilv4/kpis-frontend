import { ResponsiveLine } from '@nivo/line'
import { Box, Grid, TextField, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs'
import useCharts, { EnumCharts } from '../../hooks/useCharts'
import { GroupAdd } from '@mui/icons-material/'
import 'dayjs/locale/pt-br'
import StyledCard from '../cards'
import useWindowSize from '../../hooks/useWindowSize'

const TurnoverChart = () => {
  const { data, dateRange, setDateRange } = useCharts(EnumCharts.turnoverChart)
  const { width } = useWindowSize()
  if (!data) return null

  const baseLine = [...data?.chartData.data as Array<any>].sort((a, b) => a.y - b.y)[0].y
  const isMobile = width && width < 600

  return (
        <div style={{ width: '100%', paddingTop: '40px' }}>
            <Box display='flex' gap={5} alignItems='center' flexWrap='wrap'>
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
            <Grid container spacing={8} marginBottom={5} marginTop={1}>
                <Grid item xs={12} md={2} sm={6} >
                    <StyledCard text='Admissões' value={data.generalData.admissoesTotais} icon={<GroupAdd />}/>
                </Grid>
                <Grid item xs={12} md={2} sm={6} >
                    <StyledCard text='Demissões' value={data.generalData.recisoesTotais} icon={<GroupAdd />}/>
                </Grid>
                <Grid item xs={12} md={2} sm={6} >
                <StyledCard text='Balanço geral' value={data.generalData.balancoGeral} icon={<GroupAdd />}/>
                </Grid>
                    <Grid item xs={12} md={2} sm={6}>
                <StyledCard text='Total de colaboradores (início)' value={data.generalData.totalEmpregadosInicio} icon={<GroupAdd />}/>
                    </Grid>
                <Grid item xs={12} md={2} sm={6}>
                    <StyledCard text='Total de colaboradores (fim)' value={data.generalData.totalEmpregadosFim} icon={<GroupAdd />}/>
                </Grid>
            </Grid>
            <div style={{ width: '90%', display: 'flex', height: '400px' }}>
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
