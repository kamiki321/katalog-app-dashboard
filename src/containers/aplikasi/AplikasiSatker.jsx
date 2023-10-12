import { Divider } from '@mui/material'
import { useState } from 'react'
import Software from '../card/Software'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CariAplikasi from '../CariAplikasi';
import CardGrid from '../grid/CardGrid';
import TabPanel from '../../components/TabPanel';
import UnhanGrid from '../grid/UnhanGrid';


export const AplikasiSatker = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    };
  return (
    <div>
      <Box>
      <Box sx={styles.tabHeader}>
        <Tabs value={value}onChange={handleChange}>
          <Tab label="Pusdatin" id='tab-0' />
          {/* <Tab label="Universitas Pertahanan" id='tab-1' /> */}
          {/* <Tab label="Balitbang" id='tab-2' />
          <Tab label="Biro Hukum" id='tab-3' /> */}
          {/* <Tab label="Biro Humas" {...a11yProps(4)} />
          <Tab label="Biro Kepegawaian" {...a11yProps(5)} />
          <Tab label="Biro Ortala" {...a11yProps(6)} />
          <Tab label="Biro Peraturan Perundang-Undangan" {...a11yProps(7)} />
          <Tab label="Biro Renku" {...a11yProps(8)} />
          <Tab label="Biro TU dan Protokol" {...a11yProps(9)} />
          <Tab label="Biro Umum" {...a11yProps(10)} />
          <Tab label="Ditjen Kekuatan Pertahanan" {...a11yProps(11)} />
          <Tab label="Ditjen Perencanaan Pertahanan" {...a11yProps(12)} />
          <Tab label="Ditjen Potensi Pertahanan" {...a11yProps(13)} />
          <Tab label="Ditjen Strategi Pertahanan" {...a11yProps(14)} />
          <Tab label="Inspektorat Jenderal" {...a11yProps(15)} />
          <Tab label="Pusat Data dan Informasi" {...a11yProps(16)} />
          <Tab label="Pusat Kelaikan" {...a11yProps(17)} />
          <Tab label="Pusat Rehabilitasi" {...a11yProps(18)} />
          <Tab label="Puslapbinkuhan" {...a11yProps(19)} />
          <Tab label="Universitas Pertahanan" {...a11yProps(20)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CardGrid/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UnhanGrid />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Balitbang
      </TabPanel>
      <TabPanel value={value} index={3}>
        Biro Hukum
      </TabPanel>
      <TabPanel value={value} index={4}>
        Biro Humas
      </TabPanel>
      <TabPanel value={value} index={5}>
        Biro Kepegawaian
      </TabPanel>
      <TabPanel value={value} index={6}>
        Biro Ortala
      </TabPanel>
      <TabPanel value={value} index={7}>
        Biro Peraturan Perundang-Undangan
      </TabPanel>
      <TabPanel value={value} index={8}>
        Biro Renku
      </TabPanel>
      <TabPanel value={value} index={9}>
        Biro TU dan Protokol
      </TabPanel>
      <TabPanel value={value} index={10}>
        Biro Umum
      </TabPanel>
      <TabPanel value={value} index={11}>
        Ditjen Kekuatan Pertahanan
      </TabPanel>
      <TabPanel value={value} index={12}>
        Ditjen Perencanaan Pertahanan
      </TabPanel>
      <TabPanel value={value} index={13}>
        Ditjen Potensi Pertahanan
      </TabPanel>
      <TabPanel value={value} index={14}>
        Ditjen Strategi Pertahanan
      </TabPanel>
      <TabPanel value={value} index={15}>
        Inspektorat Jenderal
      </TabPanel>
      <TabPanel value={value} index={16}>
        Pusat Data dan Informasi
      </TabPanel>
      <TabPanel value={value} index={17}>
        Pusat Kelaikan
      </TabPanel>
      <TabPanel value={value} index={18}>
        Pusat Rehabilitasi
      </TabPanel>
      <TabPanel value={value} index={19}>
        Puslapbinkuhan
      </TabPanel>
      <TabPanel value={value} index={20}>
        Universitas Pertahanan
      </TabPanel>
    </Box>
    </div>
  )
}


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
        height : '100%',
        maxHeight: 900,
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


