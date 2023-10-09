import { PhoneAndroid } from '@mui/icons-material'
import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import SecondPie from '../pusdatinCharts/SecondPie'
import PusdatinBarCharts from '../pusdatinCharts/PusdatinBarCharts'
import TotalPieChart from './TotalPieChart'
import TotalBarChart from './TotalBarChart'

export const TotalAppCharts = () => {
  return (
    <div> 
        <Box
    sx={{
      display: { xs: 'flex', md: 'grid' },
      gridTemplateColumns: 'repeat(2,1fr)',
      gridAutoRows: 'minmax(100px, auto)',
      gap: 3,
      textAlign: 'center',
      flexDirection: 'column',
    }}
    >
    <Paper elevation={1} sx={{ p: 2 }}>
      <Typography variant="h7">Total Aplikasi Yang Digunakan Kemhan</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PhoneAndroid sx={{ height: 50, width: 50, opacity: 0.3, mr: 1 }} />
        <Typography variant="h6">157 Aplikasi</Typography>
      </Box>
    </Paper>

    <Paper elevation={1} sx={{ p: 2 }}>
      <Typography variant="h7">Total Aplikasi Pusdatin </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PhoneAndroid sx={{ height: 50, width: 50, opacity: 0.3, mr: 1 }} />
        <Typography variant="h6">54 Aplikasi</Typography>
      </Box>
    </Paper>

    <Paper elevation={1} sx={{ p: 2, gridColumn: 1}}>
        <Box>
        <TotalPieChart/>
        </Box>
    </Paper>
    <Paper elevation={1} sx={{ p: 2, gridColumn: 2}}>
        <TotalBarChart/>
      </Paper>
    </Box>
    </div>
  )
}

