import { Box, Card, CardContent, Divider, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import TabPanel from "../../components/TabPanel";
import ColorText from "../../components/ColorText";
import { Helmet } from "react-helmet-async";
import Software from "../card/Software";
import CariAplikasi from "../CariAplikasi";
import { AplikasiSatker } from "../aplikasi/AplikasiSatker";
import { OverviewAplikasi } from "../aplikasi/OverviewAplikasi";
import FilteringAplikasi from "../aplikasi/FilteringAplikasi";


function Katalog() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
      <>
        <Helmet>
          <title>
              Katalog Aplikasi
          </title>
        </Helmet>
        <div>
        <Box>
        <Typography sx={styles.pageTitle} variant="h5">Katalog Aplikasi</Typography>
        <Box sx={styles.tabHeader}>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Overview" id='tab-0' />
                <Tab label="Cari Aplikasi" id='tab-1' />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0} sx={{}}>
            {/* <ColorText color="neutral.normal">
                <Typography variant="h7">Lorem Ipsum</Typography>
            </ColorText> */}
            <Typography sx={styles.pageTitle} variant="h5">Overview Aplikasi</Typography>
            <OverviewAplikasi/>
            <Divider sx={styles.divider}/>
            <Typography sx={styles.pageTitle} variant="h5">Aplikasi per Satker</Typography>
            <FilteringAplikasi/>
            

        </TabPanel>
        <TabPanel value={value} index={1}>
        <CariAplikasi/>
            {/* <Typography>Nothing yet!</Typography> */}
        </TabPanel>

        </Box>
        <footer>
            <Box sx={{
                    width: '100%',
                    height: 80
                }}>
                <Divider sx={styles.divider}/>
                <Typography sx={{
                    justifyContent: 'center',
                    alignItems : 'center',
                    alignContent : 'center'
                }} variant="h6">© Hak Cipta 2022 - 2023 Pusat Data dan Informasi Kementerian Pertahanan Republik Indonesia</Typography>
            </Box>
        </footer>
        </div>
        </> 
    );
}

export default Katalog;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    pageTitle: {
        mb: 2
    },
    tabHeader: {
        borderBottom: 1,
        borderColor: 'divider'
    },
    rowContainer: {
        width: '100%',
        maxWidth: 900,
        border: 1,
        borderColor: 'neutral.medium',
        borderRadius: 1,
        mt: 2,
        p: 2,
        display: 'flex',
        alignItems: 'flex-start'
    },
    rowIcon: {
        fontSize: 40,
        color: 'neutral.normal'
    },
    secondColumn: {
        ml: 1
    },
    rowLink: {
        ml: 'auto'
    },
    divider: {
        my:4
    }
}

