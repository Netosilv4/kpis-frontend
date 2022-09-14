import { Help } from '@mui/icons-material'
import { styled, Tooltip, tooltipClasses, TooltipProps, Typography } from '@mui/material'

export const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    padding: '8px 16px'
  },
  cursor: 'help'
}))

export const TooltipIcon = styled(Help)({
  cursor: 'help'
})

export const TooltipText = styled(Typography)({
  fontSize: '12px',
  paddingBottom: '3px'
})
