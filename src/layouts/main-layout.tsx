import { Box, styled } from '@mui/material'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <Box>
      <Header />

      <Box component="main" sx={{ mt: 4 }}>
        <Outlet />
      </Box>
    </Box>
  )
}

const Header = styled('header')({
  height: '64px',
  backgroundColor: 'var(--bg)',
  boxShadow: 'var(--shadow)',
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
})
