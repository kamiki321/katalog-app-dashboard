import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Divider, Typography } from '@mui/material';

import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "NON-PUSDATIN",
    aplikasi: 2
  },
  {
    name: "PUSDATIN",
    aplikasi: 54
  },
  {
    name: "DIGUNAKAN",
    aplikasi: 22
  },
  {
    name: "TOTAL APLIKASI",
    aplikasi: 56
  }
];

export default function SecondBar() {
  return (
    <div style={{ width: '100%', height: 580 }}>
      <Typography variant="h6">Data Aplikasi di Pusdatin </Typography>
      <Divider sx={styles.divider}/>
      <ResponsiveContainer>
        <ComposedChart
          layout="vertical"
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 0,
            left: 80
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Bar dataKey="aplikasi" barSize={20} fill="#413ea0" />
        </ComposedChart>
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