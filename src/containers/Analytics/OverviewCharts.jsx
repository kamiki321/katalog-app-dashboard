
import { Line } from 'react-chartjs-2';
import { AppBar, Box, Tab, Tabs } from '@mui/material';
import { getMainChartData, mainChartOptions } from './ChartConfigs';
import { useState } from 'react';
import TabPanel from '../../components/TabPanel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowDropDownCircleSharpIcon from '@mui/icons-material/ArrowDropDownCircleSharp';
import AnalyticsTabHead from './AnalyticsTabHead';
import { forwardRef } from 'react';
import { AppBlocking, AppShortcutSharp, AppsOutlined, AppsRounded, AppsTwoTone, HardwareOutlined } from '@mui/icons-material';


const ViewsTabHead = forwardRef((props, ref) => <AnalyticsTabHead {...props}
    title='Aplikasi'
    ref={ref}
    icon={<AppShortcutSharp />}
    value='157' subtitle={'157 Total Aplikasi'} />);

const WatchTimeTabHead = forwardRef((props, ref) => <AnalyticsTabHead {...props}
    title='Data'
    ref={ref}
    icon={<AppsOutlined color='green'/>}
    value='61' subtitle={'61 Total Data '} />);

const SubscribersTabHead = forwardRef((props, ref) => <AnalyticsTabHead {...props}
    ref={ref}
    title='Software' 
    icon={<AppsOutlined color='red' />}
    value='-' subtitle={'- Total Software'} />);

const RevenueTabHead = forwardRef((props, ref) => <AnalyticsTabHead {...props}
    ref={ref}
    title='Hardware'
    icon={<HardwareOutlined color='green'  />}
    value='-' subtitle={'- Total Hardware'} />);

function OverviewCharts() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <Box sx={styles.container}>
        <Tabs value={value} onChange={handleChange}>
            <Tab component={ViewsTabHead} id='tab-0' />
            <Tab component={WatchTimeTabHead} id='tab-1' />
            <Tab component={SubscribersTabHead} id='tab-2' />
            <Tab component={RevenueTabHead} id='tab-3' />
        </Tabs>

        <TabPanel value={value} index={0} mt={0}>
            <Box sx={styles.mainChart}>
                <Line options={mainChartOptions} data={getMainChartData()} />
            </Box>
        </TabPanel>
        <TabPanel value={value} index={1} mt={0}>
            <Box sx={styles.mainChart}>
                <Line options={mainChartOptions} data={getMainChartData()} />
            </Box>
        </TabPanel>
        <TabPanel value={value} index={2} mt={0}>
            <Box sx={styles.mainChart}>
                <Line options={mainChartOptions} data={getMainChartData()} />
            </Box>
        </TabPanel>
        <TabPanel value={value} index={3} mt={0}>
            <Box sx={styles.mainChart}>
                <Line options={mainChartOptions} data={getMainChartData()} />
            </Box>
        </TabPanel>
    </Box>
}

export default OverviewCharts;


/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    mainChart: {
        height: 250,
        border: 1,
        borderColor: 'neutral.medium',
        pt: 4,
        borderTop: 'none',
        borderRadius: 1,

    },
    container: {
        mt: 4,
        width: '100%'
    }
}

