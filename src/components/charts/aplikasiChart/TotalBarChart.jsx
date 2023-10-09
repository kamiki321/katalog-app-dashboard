import { Divider, Typography } from "@mui/material";
import React from "react";


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
    { name: "Biro Ortala", value: 19},
    { name: "Biro Hukum ", value: 1 },
    { name: "Biro Umum", value: 14 },
    { name: "Biro Humas", value: 9 },
    { name: "Biro Renku", value: 15 },
    { name: "Biro Peraturan Perundang-Undangan", value: 1 },
    { name: "Biro Kepegawaian", value: 6 },
    { name: "Biro TU dan Protokol", value: 17 },
    { name: "Badan Instalasi Strategis Pertahanan", value: 16 },
    { name: "Badan Pendidikan dan Pelatihan", value: 28 },
    { name: "Badan Sarana Pertahanan", value: 5 },
    { name: "Ditjen Kekuatan Pertahanan", value: 18 },
    { name: "Ditjen Potensi Pertahanan", value: 12 },
    { name: "Ditjen Strategi Pertahanan", value: 10 },
    { name: "Ditjen Perencanaan Pertahanan", value: 16 },
    { name: "Inspektorat Jenderal", value: 3 },
    { name: "Pusat Data dan Informasi", value: 22 },
    { name: "Pusat Rehabilitasi", value: 4 },
    { name: "Pusat Kelaikan", value: 7 },
    { name: "Balitbang", value: 13 },
    { name: "Puslapbinkuhan", value: 8 },
    { name: "Universitas Pertahanan", value: 6 },
];

export default function TotalBarChart() {
  return (
    <div style={{ width: '100%', height: 300, minWidth: 250 }}>
      <Typography variant="h6"> Jumlah Aplikasi yang terdapat di Lingkungan Kemhan </Typography>
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
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#DBD200" />
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
