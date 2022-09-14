import { styled } from '@mui/material/styles'
import { Card, Typography } from '@mui/material'

export const StyledCard = styled(Card)({
  padding: '30px',
  maxHeight: '50px',
  minHeight: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const CardText = styled(Typography)({
  fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px', flexDirection: 'column'
})
