"use client"
import React, { useState } from 'react'
import KrMap from "../../assets/icon2";
import { DateCalendar } from '@mui/x-date-pickers-pro';



// import ZoomableImage from '../../components/ZoomImg';
import MapStatisticsWidget from '../../components/MapStatisticsWidget';
const Dashboard = () => {
    const [selectedState, setSelectedState] = useState<string>("");

    return (
        <div className="flex flex-col ml-64 mt-[60px] p-10 border   ">
            <div className="   ">
                <span className="text-2xl text-white">Dashboard</span>
                <div className='flex flex-row justify-between '>
                    < KrMap gstyle={"w-[500px] h-[500px]  hover:fill-black  "}
                        pstyle={"  stroke-[5px] stroke-[#55ffe1] hover:fill-[#354d84] hover:scale-115 delay-0"} setSelectedState={setSelectedState} />

                    <div className='flex flex-col items-center'>
                        <MapStatisticsWidget District={selectedState} />
                        <div className='mx-3  my-8 h-[200px] w-full rounded-md border-dashed border-blue-400 
                         bg-[#0000003d]
                         '>
                            <div className='p-4 h-full w-full rounded-md bg-[#0000003d]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dashboard