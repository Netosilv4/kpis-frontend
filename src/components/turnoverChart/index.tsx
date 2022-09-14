import { ResponsiveLine } from '@nivo/line'
import { Box, Card, Link, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import useCharts, { EnumCharts } from "../../hooks/useCharts";
import {GroupAdd, GroupRemove, Diversity3, PeopleAlt, Percent, Help} from '@mui/icons-material/';
import 'dayjs/locale/pt-br';
import { HtmlTooltip } from '../tooltips/styles';


const TurnoverChart = () => {
    const { data, dateRange, setDateRange } = useCharts(EnumCharts.turnoverChart)

    if(!data) return null

    const baseLine = [...data?.chartData.data as Array<any>].sort((a, b) => a.y - b.y)[0].y

    return (
        <div style={{ width: '100%', height: "400px", paddingTop: '20px'}}>
        <Typography variant="h5" style={{ paddingBottom: '10px'}}>Análise Turnover</Typography>
        <Box display="flex" style={{ gap: '20px', alignItems: "center", width: '90%', justifyContent: "space-between"}}>
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
        <Card style={{ padding: '20px'}}>
            <Box style={{ flexDirection: "column"}}>
                <Typography variant='body2' style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: '10px'}}>
                    <Percent color='primary'/> Balanço geral: <Typography variant='caption' style={{ fontWeight: 400}}>{data.generalData.balancoGeral}%</Typography>
                    <HtmlTooltip
                        title={
                            <>
                                <Typography variant='caption'>
                                    Quer saber mais sobre como é calculado o <strong>Turnover</strong> de uma empresa ?
                                </Typography>
                                <Typography>
                                    <Link fontSize={14} href="https://blog.solides.com.br/como-calcular-o-turnover/" target="_blank">
                                        Clique aqui
                                    </Link>
                                </Typography>
                            </>
                        }
                    >
                        <Help color='disabled' cursor='pointer' fontSize='small'/>
                    </HtmlTooltip>
                </Typography>
            </Box>
        </Card>
        <Card style={{ padding: '20px', marginBottom: '30px'}}>
            <Box style={{ flexDirection: "column"}}>
                <Typography variant='body2' style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: '10px'}}>
                    <GroupAdd color='primary'/> Total admissões: <Typography variant='caption' style={{ fontWeight: 400}}>{data.generalData.admissoesTotais}</Typography>
                </Typography>
                <Typography variant='body2' style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: '10px'}}>
                    <GroupRemove color='warning' /> Total recisões: <Typography variant='caption' style={{ fontWeight: 400}}>{data.generalData.recisoesTotais}</Typography>
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
        <div style={{ width: '90%', display: "flex", height: '400px'}}>
        <ResponsiveLine 
          data={[data.chartData]}
          margin={{ top: 20, right: 100, bottom: 30, left: 40 }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false,
            nice: true,
            clamp: false,
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

export default TurnoverChart