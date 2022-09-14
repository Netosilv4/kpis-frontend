import { Card, Typography } from "@mui/material"

interface StyledCardProps {
    text: string,
    value: number,
    icon: any
}

const StyledCard = (props: StyledCardProps) => {
    const { text, value, icon} = props
    return (
    <Card style={{ padding: '20px', maxWidth: '200px', maxHeight: '50px', minHeight: '50px', display: "flex", alignItems: "center", justifyContent: 'center' }}>
        <Typography variant='body2' style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: '10px'}}>
            {icon} {text} <Typography variant='caption' style={{ fontWeight: 400}}>{value}</Typography>
        </Typography>
    </Card>
    )
}

export default StyledCard