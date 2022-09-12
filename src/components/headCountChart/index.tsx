import { ResponsiveLine } from '@nivo/line'
import { Box, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from "react";
import useCharts, { EnumCharts } from "../../hooks/useCharts";

const HeadCounterChart = () => {

    const { data, dateRange, setDateRange } = useCharts(EnumCharts.headCountChart)

    if(!data) return null

    return (
        <div style={{ width: '100%', height: "400px", paddingTop: '20px'}}>
        <Typography variant="h5" style={{ paddingBottom: '20px'}}>Análise Headcount</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
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
      <Box style={{ flexDirection: "column", paddingTop: "20px"}}>
            <Typography variant='body2' style={{ fontWeight: 700}}>
                Total admissões: <Typography variant='caption' style={{ fontWeight: 400}}>{data.generalData.admissoesMes.length}</Typography>
            </Typography>
            <Typography variant='body2' style={{ fontWeight: 700}}>
                Total recisões: <Typography variant='caption' style={{ fontWeight: 400}}>{data.generalData.recisoesMes.length}</Typography>
            </Typography>
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