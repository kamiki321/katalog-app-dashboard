import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";




const data = [
  {
    name: "Terbuka",
    value: 20,

  },
  {
    name: "Rahasia",
    value: 12,

  },
  {
    name: "Terbatas",
    value: 28,

  },
  {
    name: "Tertutup",
    value: 1,

  }
];

const COLORS = [
    "#2ca02c",
  "#1f77b4",
  "#ff7f0e",
  "#d62728",
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
export default function StatusDataChart() {
  return (
    <div>
      <Typography variant="h6">Persentase Jumlah Data Berdasarkan Status Data</Typography>
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