import { Box, CircularProgress, type SxProps } from '@mui/material'
import type { CSSProperties } from 'react'

interface LoaderProps {
  fullHeight?: true
  align?: CSSProperties['justifyContent']
  sx?: SxProps
}

export const Loader = (props: LoaderProps) => (
  <Box
    sx={{
      display: 'flex',
      width: '100%',
      height: props.fullHeight ? '100dvh' : '100%',
      alignItems: 'center',
      justifyContent: props.align || 'center',
      ...props.sx,
    }}
  >
    <CircularProgress />
  </Box>
)
