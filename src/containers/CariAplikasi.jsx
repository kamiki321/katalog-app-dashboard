import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, GridToolbarExport } from '@mui/x-data-grid';
import { Helmet } from 'react-helmet-async';

import React, { useEffect, useState } from 'react'

const CariAplikasi = () => {
  const [tableData, setTableData] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    fetch("https://api.mockfly.dev/mocks/4150728a-8878-4427-8725-3a92fa972967/aplikasi")
    .then((data) => data.json())
    .then((data) => setTableData(data))
  }, [])

console.log(tableData);

const columns = [
  {field: 'id', headerName: 'No.',  width: 30 },
  {field: 'nama_aplikasi', headerName: 'Nama Aplikasi', width: 300 },
  {field: 'uraian_aplikasi', headerName: 'Uraian Aplikasi', width: 650},
  {field: 'aktif_mulai', headerName: 'aktif_mulai',width: 100 },
  {field: 'provider', headerName: 'Provider', width: 200 },

]
  return (
    <>
      <div style={{height:665, width:"100%"}}>
          <h3>Cari Katalog Aplikasi</h3>
          <DataGrid 
            rows={tableData}
            columns={columns}
            pageSize={pageSize}
            rowsPerPageOptions={[5,10,20,50,100]}
            onPageSizeChange={(newPageSize)=>setPageSize(newPageSize)}
            components={{Toolbar: GridToolbar}}
          />
      </div>
    </>
  )
}

export default CariAplikasi;




