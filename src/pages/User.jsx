import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

const User = () => {
  const { id } = useParams()
  return (
    <Box sx={{ bgcolor: 'lightcoral' }}>
      <Typography>USER N° {id}</Typography>
    </Box>
  )
}

export default User
