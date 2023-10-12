import { Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";


import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
    { name: 'Ditjen Renhan', value: 24},
    { name: 'Biro Ortala', value: 19 },
    { name: 'Biro Turdang', value: 1 },
    { name: "Biro Umum", value: 17 },
    { name: "Biro Hukum", value: 15 },
    { name: "Itjen Kemhan", value: 3 },
    { name: "Ditjen Strahan Kemhan", value: 12 },
    { name: "Ditjen Pothan Kemhan", value: 12 },
    { name: "Ditjen Kuathan Kemhan", value: 18 },
    { name: "Ditjen Baranahan Kemhan", value: 26 },
    { name: "Unhan Kemhan", value: 7 },
    { name: "Biro TU dan Protokol", value: 17 },
    { name: "Biro Kepegawaian", value: 6 },
    { name: "Pusat Kelaikan", value: 7 },
    { name: "Badiklat Kemhan", value: 27 },
    { name: "Bainstrahan Kemhan", value: 16 },
    { name: "Pusrehab Kemhan", value: 2 },
    { name: "Pusdatin Kemhan", value: 19 },
  
];

export default function TotalBarChart() {
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

  return (

    <div  style={{animationStyle, width: '100%', height: 350, minWidth: 250 }} className="analytics-container">
      <Typography variant="h6"> Jumlah Aplikasi yang digunakan di Lingkungan Kemhan </Typography>
      <Divider sx={styles.divider}/>
      <ResponsiveContainer>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 15,
          left: 0,
          bottom: 60
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#3A7240" />
      </AreaChart>
    </ResponsiveContainer>
    
    </div>
  );
}

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
  divider: {
    my:2
}
}    
