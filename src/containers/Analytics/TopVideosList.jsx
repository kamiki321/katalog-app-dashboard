import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import { OverviewAplikasi } from '../aplikasi/OverviewAplikasi';


const rows = [
    { name: 'Analisis Ancaman Negara', satker: 'N/A' ,provider: 'Pusdatin', kategori: 'N/A' },
    { name: 'Si Rokum', satker: 'Biro Hukum' ,provider: 'Pusdatin', kategori: 'N/A' },
    { name: 'SIAC', satker: 'Biro Kepegawaian' ,provider: 'Ropeg', kategori: 'N/A' },
    { name: 'Aplikasi Command Center', satker: 'Badan Pendidikan dan Pelatihan' ,provider: 'Pusdatin', kategori: 'N/A' },
    { name: 'Aplikasi Virtual Collaboration System', satker: 'Badan Pendidikan dan Pelatihan' ,provider: 'Pusdatin', kategori: 'N/A' },
    { name: 'Aplikasi Simulasi Manajemen Pertahanan', satker: 'Badan Pendidikan dan Pelatihan' ,provider: 'Pusdatin', kategori: 'N/A' },
    { name: 'Monitoring Dikumen Elektronik ', satker: 'Badan Sarana Pertahanan' ,provider: 'Badan Sarana Pertahanan', kategori: 'N/A' },
    { name: 'Dtakah Kemhan', satker: 'Ditjen Kekuatan Pertahanan' ,provider: 'Pusdatin', kategori: 'N/A' },
    { name: 'PPID Kemhan', satker: 'Ditjen Potensi Pertahanan' ,provider: 'Biro Humas Setjen Kemhan', kategori: 'N/A' },
    { name: 'LDT', satker: 'Ditjen Potensi Pertahanan' ,provider: 'Pusdatin', kategori: 'N/A' }

];

function TopVideosList({ }) {
    
    return (
        <Box sx={styles.container}>
            <Typography variant="h4">
                Aplikasi Overview
            </Typography>
            <br></br>
            <OverviewAplikasi />
            <TableContainer sx={styles.tableContainer} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <h3>APLIKASI</h3>
                            </TableCell>
                            <TableCell align="right">
                                <h3>SATKER/BIRO/DITJEN</h3>
                            </TableCell>
                            <TableCell align="right">
                                <h3>PROVIDER</h3>
                            </TableCell>
                            <TableCell align="right">
                                <h3>KATEGORI</h3>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                            >
                                <TableCell component="th" sx={styles.contentCell}>
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.satker}</TableCell>
                                <TableCell align="right">{row.provider}</TableCell>
                                <TableCell align="right">{row.kategori}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>);
}

export default TopVideosList;


/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    container: {
        mt: 4,
        width: '100%',
        textAlign: 'center'
    },
    tableContainer: {
        mt: 8
    },
    contentCell: {
        display: 'flex',
        alignItems: 'center'
    },
    // videoid: {
    //     width: '100%',
    //     maxWidth: 100,
    //     marginRight: 1,
    // },
}

