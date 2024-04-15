import { Box, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <Box sx={{ bgcolor: 'lightcoral' }}>
      <Typography>Dashboard for User</Typography>
      <Outlet />
    </Box>
  )
}

export default Dashboard
