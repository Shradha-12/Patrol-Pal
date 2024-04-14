"use client"
import React, { useState } from 'react';

import { PieChart, LineChart, BarChart } from '@mui/x-charts';
import { Tooltip } from 'react-tooltip'
import KrMap from "../../assets/KrMap";
import MapStats from "../../assets/data/mapstats";
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';
import MapStatisticsWidget from '../../components/MapStatisticsWidget';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from 'next/link';
const Dashboard = () => {
     const [selectedState, setSelectedState] = useState<string>("Bidar");



    return (
        <div className='flex flex-col'>
            <h1 className="text-white text-3xl font-x mb-4">Dashboard</h1>
            <div className='flex flex-row justify-between '>
                < KrMap gstyle={" group relative w-[500px] h-[500px]  hover:fill-black  "}
                    pstyle={"shape stroke-[5px] stroke-[#55ffe1] hover:fill-[#354d84] hover:scale-115 delay-0"} setSelectedState={setSelectedState} />
                <Tooltip
                    id="my-tooltip" />
                <div className='flex flex-col items-center'>
                    <MapStatisticsWidget coordinates={[17.913682823451815, 77.50965388590237]} District={selectedState} Mapstats={{
                        CrimeRate: MapStats[selectedState]["Crime Rate"],
                        PoliceStations: MapStats["Bidar"]["Police Stations"],
                        PendingCases: MapStats["Bidar"]["Pending Cases"]
                    }} />
                    <Link className="my-4 self-end text-[#ffffff] hover:text-[#59fff1]"
                        href=
                        {{
                            pathname: "/details",
                            query: { district: selectedState }
                        }} >Learn More <OpenInNewIcon /></Link>

                    <div className="w-full bg-[#040620] rounded-md mt-2  flex items-center">
                        <input type="text" className="m-2 w-full bg-[#040620] text-white placeholder-white focus:outline-none" placeholder="Search..." />
                        <div className="bg-[#474D84] rounded rounded-bl-none rounded-tl-none    w-[40px] h-full flex justify-center items-center">
                            <SearchIcon className="text-white w-4 h-4" />
                        </div>
                    </div>
                    <div className='mx-3  my-8  w-full rounded-md border-dashed    py-2
                         bg-[#0000003d]
                         '>
                        {/* <div className='p-4 h-full w-full rounded-md bg-[#0000003d]'> */}
                        <PieChart className=" "
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'Pending Cases' },
                                        { id: 1, value: 15, label: 'Closed Cases' },
                                        { id: 2, value: 20, label: 'New Cases' },
                                    ],
                                },
                            ]}
                            slotProps={{
                                legend: {
                                    labelStyle: {
                                        fontSize: 14,
                                        fill: 'white',
                                    },
                                },
                            }}
                            width={400}
                            height={200}
                        />
                        {/* </div> */}

                    </div>

                </div>
            </div>
            <div className='flex   '>
                <div className='         rounded-md border-dashed    p-2
                         bg-[#0000003d]
                         '>

                    <LineChart
                        width={400}
                        height={300}
                        series={[
                            { data: [8, 4, 4, 2], label: 'Cases Registerd', color: '#057efe' }
                        ]}
                        xAxis={[{
                            scaleType: 'point', data: [
                                'Week 1',
                                'Week 2',
                                'Week 3',
                                'Week 4'
                            ]
                        }]}
                        slotProps={{
                            legend: {
                                labelStyle: {
                                    fontSize: 14,
                                    fill: 'white',
                                    color: '#4e79a7'
                                },

                            },
                        }}


                    />
                </div>
                <div className=' rounded-md border-dashed   ml-8 py-2
                         bg-[#0000003d]
                         '> <BarChart title='Crime Rate per District'
                        xAxis={[{
                            label: "District",
                            scaleType: 'band',
                            data: [
                                "Bagalkote",
                                "Ballari",
                                "Belagavi",
                                "Bengaluru Rural",
                                "Bengaluru Urban",
                                "Bidar",
                                "Chamarajanagara",
                                "Chikkaballapura",
                                "Chikkamagaluru",
                                "Chitradurga",
                                "Dakshina Kannada",
                                "Davanagere",
                                "Dharwad",
                                "Gadag",
                                "Hassan",
                                "Haveri",
                                "Kalaburagi",
                                "Kodagu",
                                "Kolar",
                                "Koppal",
                                "Mandya",
                                "Mysuru",
                                "Raichur",
                                "Ramanagara",
                                "Shivamogga",
                                "Tumakuru",
                                "Udupi",
                                "Uttara Kannada",
                                "Vijayanagara",
                                "Vijayapura",
                                "Yadgir"
                            ],
                            slotProps: {
                                axisTickLabel: {
                                    rotate: '90deg'
                                }
                            }
                        }]}
                        series=
                        {
                            [
                                {
                                    data: [
                                        343.70,
                                        153.45,
                                        189.23,
                                        178.56,
                                        167.89,
                                        156.78,
                                        145.67,
                                        134.56,
                                        123.45,
                                        112.34,
                                        101.23,
                                        90.12,
                                        89.01,
                                        78.90,
                                        67.89,
                                        56.78,
                                        45.67,
                                        34.56,
                                        23.45,
                                        12.34,
                                        543.21,
                                        234.56,
                                        345.67,
                                        234.56,
                                        123.45,
                                        345.67,
                                        234.56,
                                        123.45,
                                    ], color: "#577399"
                                }
                            ]}
                        width={700}
                        height={300}
                    // sx={{
                    //     "& .MuiChartsAxis-directionX": {
                    //         "& .MuiChartsAxis-tickLabel": {
                    //             rotate: "90deg"
                    //         }
                    //     }
                    // }}

                    /></div>
                {/* <div className='  h-[100px]   w-[200px]   rounded-md border-dashed    py-2
                         bg-[#0000003d]
                '> */}
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar />
                    </LocalizationProvider> */}
                {/* </div> */}
            </div>

        </div>
    )
}


export default Dashboard