import { ResponsiveLine } from '@nivo/line'
import { Box, Card, Grid, Link, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import useCharts, { EnumCharts } from "../../hooks/useCharts";
import {GroupAdd, GroupRemove, Diversity3, PeopleAlt, Percent, Help} from '@mui/icons-material/';
import 'dayjs/locale/pt-br';
import StyledCard from '../cards';


const HeadCounterChart = () => {

    const { data, dateRange, setDateRange } = useCharts(EnumCharts.headCountChart)


    if(!data) return null
    
    const baseLine = [...data?.chartData.data as Array<any>].sort((a, b) => a.y - b.y)[0].y

    return (
        <div style={{ width: '100%',  paddingTop: '40px'}}>
        <Box display='flex' gap={10} alignItems='center'>
        <Typography variant="h5" style={{ paddingBottom: '10px'}}>Análise Headcount</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <DatePicker
            views={['year']}
            label="Período"
            toolbarPlaceholder="Selecione o período"
            onChange={(value) => {
              setDateRange(value as Dayjs);
            }}
            value={dateRange}
            renderInput={(params: any) => <TextField {...params} helperText={''} />}
          />
        </LocalizationProvider>
        </Box>
        <Grid container spacing={8} marginBottom={5} marginTop={1}>
            <Grid item xs={3} md={2}>
                <StyledCard text='Admissões' value={data.generalData.admissoesTotais} icon={<GroupAdd />}/>
            </Grid>
            <Grid item xs={3} md={2}>
                <StyledCard text='Demissões' value={data.generalData.recisoesTotais} icon={<GroupAdd />}/>
            </Grid>
            <Grid item xs={3} md={2}>
            <StyledCard text='Balanço geral' value={data.generalData.balancoGeral} icon={<GroupAdd />}/>
            </Grid>
                <Grid item xs={3} md={2}>
            <StyledCard text='Total de colaboradores (início)' value={data.generalData.totalEmpregadosInicio} icon={<GroupAdd />}/>
                </Grid>
            <Grid item xs={3} md={2}>
                <StyledCard text='Total de colaboradores (fim)' value={data.generalData.totalEmpregadosFim} icon={<GroupAdd />}/>
            </Grid>
        </Grid>
        <div style={{ width: '90%', display: "flex", height: '400px'}}>
        <ResponsiveLine 
          data={[data.chartData]}
          margin={{ top: 20, right: 100, bottom: 30, left: 40 }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
           }}
           curve="monotoneX"
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
                    translateX: 100,
                    
                }]
            }
            areaOpacity={0.5}
            enableCrosshair
        />
        </div>
      </div>
    )
}

export default HeadCounterChart