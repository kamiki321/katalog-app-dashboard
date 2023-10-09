import { AppRegistration, Group, MapsHomeWork, PhoneAndroid } from '@mui/icons-material'
import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import PusdatinBarCharts from './PusdatinBarCharts'
import SecondBar from './SecondBar'
import PusdatinPieCharts from './PusdatinPieCharts'
import SecondPie from './SecondPie'
import PusdatinAppList from './PusdatinAppList'

export const Pusdatin = () => {
  return (
    <div> 
        <Box
    sx={{
      display: { xs: 'flex', md: 'grid' },
      gridTemplateColumns: 'repeat(4,1fr)',
      gridAutoRows: 'minmax(100px, auto)',
      gap: 3,
      textAlign: 'center',
      flexDirection: 'column',
    }}
    >
    <Paper elevation={1} sx={{ p: 3 }}>
      <Typography variant="h7">Total Aplikasi</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PhoneAndroid sx={{ height: 50, width: 50, opacity: 0.3, mr: 1 }} />
        <Typography variant="h6">56 Aplikasi</Typography>
      </Box>
    </Paper>
    <Paper elevation={1} sx={{ p: 3 }}>
      <Typography variant="h7">Dimiliki Pusdatin</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PhoneAndroid sx={{ height: 50, width: 70, opacity: 0.3, mr: 1 }} />
        <Typography variant="h6">54 Aplikasi </Typography>
      </Box>
    </Paper>
    <Paper elevation={1} sx={{ p: 3 }}>
      <Typography variant="h7">Digunakan Pusdatin</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PhoneAndroid sx={{ height: 50, width: 70, opacity: 0.3, mr: 1 }} />
        <Typography variant="h6">22 Aplikasi </Typography>
      </Box>
    </Paper>
    <Paper elevation={1} sx={{ p: 3 }}>
      <Typography variant="h7">Dimiliki Non-Pusdatin</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PhoneAndroid sx={{ height: 50, width: 70, opacity: 0.3, mr: 1 }} />
        <Typography variant="h6">2 Aplikasi </Typography>
      </Box>
    </Paper>
    <Paper elevation={1} sx={{ p: 2, gridColumn: 3 }}>
        <Box>
        <SecondPie/>
        </Box>
    </Paper>
    <Paper elevation={1} sx={{ p: 2, gridColumn: '1/3', gridRow: 2 }}>
        <SecondBar/>
    </Paper>
    <Paper elevation={1} sx={{ p: 2, gridColumn: '1/4' }}>
        <PusdatinPieCharts/>
    </Paper>
    <Paper elevation={1} sx={{ p: 2, gridColumn: '1/4' }}>
        <PusdatinBarCharts/>
    </Paper>
    <Paper elevation={1} sx={{ p: 2, gridColumn: 4, gridRow: 2 }}>
        <PusdatinAppList/>
    </Paper>

    </Box>
    </div>
  )
}

