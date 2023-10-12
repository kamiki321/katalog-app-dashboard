import { DataArray, DataObject, Folder, FolderDelete, FolderDeleteOutlined, FolderOffOutlined, FolderOffRounded, FolderOffSharp, FolderOffTwoTone, FolderOpen, FolderOpenSharp, FolderOpenTwoTone, FolderSpecial, PermDataSettingRounded, PhoneAndroid, RuleFolderOutlined } from '@mui/icons-material'
import { Box, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TotalBarChart from '../aplikasiChart/TotalBarChart'
import TotalPieChart from '../aplikasiChart/TotalPieChart'
import TotalDataPieChart from './TotalDataPieChart'
import TotalDataBarChart from './TotalDataBarChart'
import StatusDataChart from './StatusDataChart'
import ListData from './TopDataList'
import TopDataList from './TopDataList'
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // For table support (optional)






export const TotalDataChart = () => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    // Add a delay to trigger the fade-in animation after a short delay
    const timeoutId = setTimeout(() => {
      setFadeIn(true);
    }, 500); // Adjust the delay as needed

    // Clear the timeout on unmount to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);


  const animationStyle = fadeIn ? { opacity: 1, transition: 'opacity 0.5s' } : { opacity: 0 };

  const exportToPDF = () => {
    const doc = new jsPDF();
  
    // Define the content you want to add to the PDF
    const content = document.getElementById('total-data-chart'); // Change the ID if needed
  
    // Create a canvas from the content
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
  
    // Set the canvas size to the content's size
    canvas.width = content.offsetWidth;
    canvas.height = content.offsetHeight;
  
    // Draw the content to the canvas
    const svgString = new XMLSerializer().serializeToString(content);
    const image = new Image();
    image.src = 'data:image/svg+xml,' + encodeURIComponent(svgString);
  
    image.onload = () => {
      context.drawImage(image, 0, 0);
  
      // Add the canvas as an image to the PDF
      doc.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 10, 190, 0);
  
      // Save or download the PDF
      doc.save('total-data-chart.pdf');
    };
  };
  
  return (
    <div style={animationStyle} className="analytics-container"> 
        <Box
    sx={{
      display: { xs: 'flex', md: 'grid' },
      gridTemplateColumns: 'repeat(5,1fr)',
      gridAutoRows: 'minmax(100px, auto)',
      gap: 3,
      textAlign: 'center',
      flexDirection: 'column',
    }}
    >
    <Paper elevation={1} sx={{ p: 2 }}>
      <Typography variant="h7">Total Data</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Folder sx={{ height: 50, width: 50, opacity: 0.3, mr: 1 }} />
        <Typography variant="h6">61 Data</Typography>
      </Box>
    </Paper>

    <Paper elevation={1} sx={{ p: 2 }}>
      <Typography variant="h7">Status Terbuka </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FolderOpenTwoTone color='green' sx={{ height: 50, width: 50, opacity: 0.3, mr: 1 , color:''}} />
        <Typography variant="h6">20 Data</Typography>
      </Box>
    </Paper>

    <Paper elevation={1} sx={{ p: 2 }}>
      <Typography variant="h7">Status Tertutup </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FolderOffRounded color='black'  sx={{ height: 50, width: 50, opacity: 0.3, mr: 1 }} />
        <Typography variant="h6">1 Data</Typography>
      </Box>
    </Paper>

    <Paper elevation={1} sx={{ p: 2 }}>
      <Typography variant="h7">Status Terbatas </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FolderOffOutlined sx={{ height: 50, width: 50, opacity: 0.3, mr: 1 }} />
        <Typography variant="h6">28 Data</Typography>
      </Box>
    </Paper>

    <Paper elevation={1} sx={{ p: 2 }}>
      <Typography variant="h7">Status Rahasia </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FolderSpecial sx={{ height: 50, width: 50, opacity: 0.3, mr: 1 }} />
        <Typography variant="h6">12 Data</Typography>
      </Box>
    </Paper>

    <Paper elevation={2} sx={{ p: 2, gridColumn: '1/4', gridRow: 3}}>
        <Box>
        <TotalDataPieChart/>
        </Box>
    </Paper>
    <Paper elevation={2} sx={{ p: 2, gridColumn: 4, gridRow: '3/3'}}>
        <Box>
        <StatusDataChart/>
        </Box>
    </Paper>
    <Paper elevation={1} sx={{ p: 2, gridColumn: '1/5', gridRow: 2}}>
        <TotalDataBarChart/>
    </Paper>
    <Paper elevation={1} sx={{ p: 2, gridColumn: 5, gridRow: '2/4' }}>
        <TopDataList/>
    </Paper>
    </Box>
    <button
        onClick={exportToPDF}
        style={{ padding: '10px', margin: '10px' }}
      >
        Export to PDF
      </button>
    </div>
  )
}

