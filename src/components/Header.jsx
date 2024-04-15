import { Box, Typography } from '@mui/material'

const Header = () => {
  return (
    <Box
      component="header"
      // position="fixed"
      // position="static"
      sx={{
        bgcolor: 'lightBlue',
        // alignItems: 'center',
      }}
    >
      <Typography>This is my HEADER</Typography>
    </Box>
  )
}

export default Header
