import { Container, Paper, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

const User = () => {
  const { id } = useParams()
  return (
    <Container>
      <Paper>
        <Typography>USER N° {id}</Typography>
      </Paper>
    </Container>
  )
}

export default User
