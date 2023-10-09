import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";




const data = [
  {
    name: "Bainstrahan",
    value: 5,

  },
  {
    name: "Baranahan",
    value: 3,

  },
  {
    name: "Biro Humas",
    value: 8,

  },
  {
    name: "Biro Turdan",
    value: 1,

  },
  {
    name: "Ditjen Kuathan ",
    value: 28,

  },
  {
    name: "Ditjen Pothan",
    value: 5,

  },
  {
    name: "Ditjen Strahan",
    value: 2,

  },
  {
    name: "Inspektorat Jendral ",
    value: 4,

  },
  {
    name: "Pusdatin",
    value: 2,

  },
  {
    name: "Puslaik ",
    value: 1,

  },
  {
    name: "Pusrehab",
    value: 2,

  }
];

const COLORS = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
  "#e377c2",
  "#7f7f7f",
  "#bcbd22",
  "#17becf",
  "#aec7e8" 
];

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
export default function TotalDataPieChart() {
  return (
    <div>
      <Typography variant="h6">Persentase Jumlah Total Data Per Satker</Typography>
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
        <Typography variant="h6">Satker Provider</Typography>
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