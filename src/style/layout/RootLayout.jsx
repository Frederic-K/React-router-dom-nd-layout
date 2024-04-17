import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <Box>
        <Header />
        <Outlet />
        <Footer />
      </Box>
    </>
  )
}

export default RootLayout
