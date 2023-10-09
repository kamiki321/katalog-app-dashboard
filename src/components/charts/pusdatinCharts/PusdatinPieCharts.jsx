import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";




const data = [
  { name: "unknown", value: 3 },
  { name: "2006", value: 1 },
  { name: "2016", value: 1 },
  { name: "2017", value: 3 },
  { name: "2018", value: 2 },
  { name: "2019", value: 6 },
  { name: "2020", value: 4 },
  { name: "2021", value: 5 },
  { name: "2022", value: 31 },
];

const COLORS = ["#DEDEDE", "#C4C6FF", "#989CFF", "#6367E5", "#3D43CB", "#242CF9", "#252AAC", "#1E2287", "#000463"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function PusdatinPieCharts() {
  return (
    <div>
      <Typography variant="h6"> Jumlah Aplikasi yang terdapat di Pusdatin Kemhan berdasarkan kategori Tahun Pembuatan</Typography>
      <Divider sx={styles.divider}/>
    <Box 
        sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    > 
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip/>
      </PieChart>
      <Stack gap={2}>
        <Typography variant="h6">Year</Typography>
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          {COLORS.map((color, i) => (
            <Stack key={color} alignItems="center" spacing={1}>
              <Box sx={{ width: 20, height: 20, background: color }} />
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                {data[i]?.name}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Stack>
    </Box>
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
