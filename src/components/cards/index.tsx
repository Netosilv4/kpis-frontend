import { GroupAdd, GroupRemove, People, Percent } from '@mui/icons-material'
import { Card, Grid, Typography } from '@mui/material'
import { ChartData } from '../../hooks/useCharts'
import { CardText, StyledCard } from './styles'

interface StyledCardProps {
  chartData: ChartData
}

const Cards = (props: StyledCardProps) => {
  const { chartData } = props
  return (
    <Grid container spacing={4} marginBottom={5} marginTop={1} justifyContent='center'>
      <Grid item xs={12} md={2} sm={6} >
        <StyledCard>
          <CardText variant="body2" >
            <Percent color='primary'/>
                        Balanço geral
            <Typography variant="h6" fontWeight={700}>
              {chartData.generalData.balancoGeral}%
            </Typography>
          </CardText>
        </StyledCard>
      </Grid>
      <Grid item xs={12} md={2} sm={6} >
        <StyledCard>
          <CardText variant="body2" >
            <GroupAdd color='secondary'/>
                        Admissões
            <Typography variant="h6" fontWeight={700}>
              {chartData.generalData.admissoesTotais}
            </Typography>
          </CardText>
        </StyledCard>
      </Grid>
      <Grid item xs={12} md={2} sm={6} >
        <StyledCard>
          <CardText variant="body2" >
            <GroupRemove color='error'/>
                        Recisões
            <Typography variant="h6" fontWeight={700}>
              {chartData.generalData.recisoesTotais}
            </Typography>
          </CardText>
        </StyledCard>
      </Grid>
      <Grid item xs={12} md={2} sm={6}>
        <StyledCard>
          <CardText variant="body2" >
            <People color='warning'/>
                        Total inicio do período
            <Typography variant="h6" fontWeight={700}>
              {chartData.generalData.totalEmpregadosInicio}
            </Typography>
          </CardText>
        </StyledCard>
      </Grid>
      <Grid item xs={12} md={2} sm={6}>
        <StyledCard>
          <CardText variant="body2" >
            <GroupAdd color='success'/>
                        Total fim do período
            <Typography variant="h6" fontWeight={700}>
              {chartData.generalData.totalEmpregadosFim}
            </Typography>
          </CardText>
        </StyledCard>
      </Grid>
    </Grid>
  )
}

export default Cards
