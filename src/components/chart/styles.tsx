import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

export const ChartContainer = styled.div`
    width: 100%;
    padding-top: 40px;
`

export const ChartHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
})

export const ChartTitle = styled(Typography)({
  display: 'flex',
  gap: '10px',
  alignItems: 'center'
})

export const ChartContainerBody = styled.div`
    width: 100%; 
    display: flex;
    height: 400px
`
