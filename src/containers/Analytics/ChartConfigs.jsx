import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    BarElement,
} from 'chart.js';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    BarElement
);

export const mainChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true
        },
        title: {
            display: true
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            position: 'right',
            ticks: {
                maxTicksLimit: 6,
            }
        },
        x: {
            grid: {
                display: false
            },
            ticks: {
                maxTicksLimit: 3,
                align: 'inner'
            }
        }
    },
    point: true,
    elements: {
        point: {
            pointStyle: true
        },
        line: {
            borderColor: 'rgb(95, 158, 199)',
            fill: true,
            borderWidth: 2
        }
    }
};

const satker = [
    'Biro Ortala', 
    'Biro Hukum', 
    'Biro Umum', 
    'Biro Peraturan Perundang-Undangan', 
    'Biro Kepegawaian',
    'Biro TU dan Protokol',
    'Badan Instalasi Strategis Pertahanan',
    'Badan Pendidikan dan Pelatihan',
    'Badan Sarana Pertahanan',
    'Ditjen Kekuatan Pertahanan',
    'Ditjen Potensi Pertahanan',
    'Ditjen Strategi Pertahanan',
    'Ditjen Perencanaan Pertahanan',
    'Inspektorat Jenderal',
    'Pusat Data dan Informasi',
    'Pusat Rehabilitasi',
    'Pusat Kelaikan',
    'Biro Humas',
    'Biro Renku',
    'Balitbang',
    'Puslapbinkuhan',
    'Universitas Pertahanan',
];

const number = [
    19,
    1,
    14,
    1,
    6,
    17,
    16,
    28,
    5,
    18,
    12,
    10,
    16,
    3,
    22,
    4,
    7,
    9,
    15,
    13,
    8,
    6,
];


export const getMainChartData = () => {
    return {
        labels: satker,
        datasets: [
            {

                label: 'Value',
                data: satker.map(() => faker.datatype.number({ min: 1, max: 30 })),
                backgroundColor: 'rgba(161, 207, 237, 0.5)',
                animation: false
            },
        ],
    };
}



