import { ResponsiveLine } from '@nivo/line'
import { TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs'
import useCharts, { EnumCharts } from '../../hooks/useCharts'
import 'dayjs/locale/pt-br'
import Cards from '../../components/cards'
import useWindowSize from '../../hooks/useWindowSize'
import { returnChartTooltip } from '../utils/chart'
import { ChartContainer, ChartContainerBody, ChartHeader, ChartTitle } from './styles'

interface ChartI {
  type: EnumCharts
}

const Chart = (props: ChartI) => {
  const { type } = props
  const { data, dateRange, setDateRange } = useCharts(type)
  const { width } = useWindowSize()

  if (!data || !data.chartData || !data.generalData) return null

  const baseLine = [...data?.chartData.data as Array<any>].sort((a, b) => a.y - b.y)[0].y
  const isMobile = width && width < 600

  return (
    <ChartContainer>
      <ChartHeader>
        <ChartTitle variant="h5">
              Análise {data.chartData.id}
          {
            returnChartTooltip(data.chartData.id)
          }
        </ChartTitle>
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
      </ChartHeader>
      <Cards chartData={data} />
      <ChartContainerBody>
        <ResponsiveLine
          data={[data.chartData]}
          margin={{ top: 20, right: !isMobile ? 100 : 20, bottom: !isMobile ? 30 : 0, left: !isMobile ? 40 : 0 }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto'
          }}
          enableGridX={true}
          lineWidth={3}
          enableArea={true}
          areaBaselineValue={baseLine}
          enableSlices="x"
          animate={true}
          legends={[
            {
              anchor: 'top-right',
              direction: 'column',
              itemWidth: 80,
              itemHeight: 20,
              translateX: 100

            }]
          }
          colors={{ scheme: 'category10' }}
          areaOpacity={0.5}
          enableCrosshair
        />
      </ChartContainerBody>
    </ChartContainer>
  )
}

export default Chart
