import Header from './Header'
import Footer from './Footer'
import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
      <Header />
      <Container sx={{ my: '10px' }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export default Root
