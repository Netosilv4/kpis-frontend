import { Card, Link } from '@mui/material'
import { HtmlTooltip, TooltipIcon, TooltipText } from '../tooltips/styles'

export const returnChartTooltip = (tooltip: string) => {
  switch (tooltip) {
    case 'Headcount':
      return (
        <HtmlTooltip title={
          <>
            <TooltipText>A análise de Headcount mostra o número de pessoas empregadas em uma organização em um determinado período de tempo</TooltipText>
            <TooltipText>Para realizar a análise, selecione o período desejado</TooltipText>
            <TooltipText>Para saber mais, acesse:</TooltipText>
            <Link style={{ cursor: 'pointer' }}>https://blog.solides.com.br/o-que-e-headcount/</Link>
          </>
        }>
          <TooltipIcon color='info' fontSize='medium'/>
        </HtmlTooltip>
      )
    case 'Turnover':
      return (
        <HtmlTooltip title={
          <>
            <TooltipText>A análise de Turnover mostra a taxa de rotatividade de funcionários em uma organização em um determinado período de tempo</TooltipText>
            <TooltipText>Para realizar a análise, selecione o período desejado</TooltipText>
            <TooltipText>Para saber mais, acesse </TooltipText>
            <Link style={{ cursor: 'pointer' }}>https://blog.solides.com.br/como-calcular-o-turnover/</Link>
          </>
        }>
          <TooltipIcon color='info' fontSize='medium'/>
        </HtmlTooltip>
      )
    default: return null
  }
}
