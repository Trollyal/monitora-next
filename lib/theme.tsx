'use client'

import { CssBaseline } from '@mui/material';
import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles';
import { FC, ReactNode } from 'react';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#37474f',
    },
    secondary: {
      main: '#607d8b',
    },
    error: {
      main: '#d21010',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem'
    },
    h2: {
      fontSize: '2.5rem'
    },
    h3: {
      fontSize: '2rem'
    },
    h4: {
      fontSize: '1.8rem'
    },
    h5: {
      fontSize: '1.6rem'
    },
    h6: {
      fontSize: '1rem'
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
}

const theme = createTheme(themeOptions)

export const Theme: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>      
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}