import { ResponsiveLine } from '@nivo/line'
import { Box, Card, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import useCharts, { EnumCharts } from "../../hooks/useCharts";
import {GroupAdd, GroupRemove, Diversity3, PeopleAlt, Percent} from '@mui/icons-material/';
import 'dayjs/locale/pt-br';

const HeadCounterChart = () => {

    const { data, dateRange, setDateRange } = useCharts(EnumCharts.headCountChart)

    if(!data) return null

    return (
        <div style={{ width: '100%', height: "400px", paddingTop: '20px'}}>
        <Typography variant="h5" style={{ paddingBottom: '10px'}}>Análise Headcount</Typography>
        <Box display="flex" style={{ gap: '20px', alignItems: "center", width: '90%', justifyContent: "space-between"}}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <DatePicker
            views={['year', 'month']}
            label="Mês e ano"
            toolbarPlaceholder="Selecione o mês e ano"
            onChange={(value) => {
              setDateRange(value as Dayjs);
            }}
            value={dateRange}
            renderInput={(params: any) => <TextField {...params} helperText={''} />}
          />
        </LocalizationProvider>
        <Card style={{ padding: '20px', marginBottom: '30px'}}>
            <Box style={{ flexDirection: "column"}}>
                <Typography variant='body2' style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: '10px'}}>
                    <Percent color='primary'/> Balanço geral: <Typography variant='caption' style={{ fontWeight: 400}}>{data.generalData.balancoGeral}%</Typography>
                </Typography>
            </Box>
        </Card>
        <Card style={{ padding: '20px', marginBottom: '30px'}}>
            <Box style={{ flexDirection: "column"}}>
                <Typography variant='body2' style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: '10px'}}>
                    <GroupAdd color='primary'/> Total admissões: <Typography variant='caption' style={{ fontWeight: 400}}>{data.generalData.admissoesMes.length}</Typography>
                </Typography>
                <Typography variant='body2' style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: '10px'}}>
                    <GroupRemove color='warning' /> Total recisões: <Typography variant='caption' style={{ fontWeight: 400}}>{data.generalData.recisoesMes.length}</Typography>
                </Typography>
                <Typography variant='body2' style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: '10px'}}>
                    <PeopleAlt color='info' /> Total de empregados no inicio do periodo: <Typography variant='caption' style={{ fontWeight: 400}}>{data.generalData.totalEmpregadosInicio}</Typography>
                </Typography>
                <Typography variant='body2' style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: '10px'}}>
                    <Diversity3 color='secondary'/> Total de empregados no fim do periodo: <Typography variant='caption' style={{ fontWeight: 400}}>{data.generalData.totalEmpregadosFim}</Typography>
                </Typography>
            </Box>
        </Card>
        </Box>
        <ResponsiveLine 
          data={[data.chartData]}
          margin={{ top: 20, right: 110, bottom: 50, left: 40 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        />
      </div>
    )
}

export default HeadCounterChart