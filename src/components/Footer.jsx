import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      component="footer"
      // className="footer"
      position="fixed"
      // position="static"
      sx={{
        width: '100%',
        bottom: 0,
        bgcolor: 'lightBlue',
        alignItems: 'center',
      }}
    >
      <Typography>This is my FOOTER</Typography>
    </Box>
  )
}

export default Footer
