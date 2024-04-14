import { Container, Paper, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <Container>
      <Paper>
        <Typography>Dashboard for User</Typography>
      </Paper>
      <Outlet />
    </Container>
  )
}

export default Dashboard
