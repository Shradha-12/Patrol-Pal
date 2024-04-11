"use client"
import React, { useState } from 'react'
import KrMap from "../../assets/icon2";
import RajMap from "../../assets/raj";
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation'
import { DateCalendar } from '@mui/x-date-pickers-pro';
// import ZoomableImage from '../../components/ZoomImg';
import MapStatisticsWidget from '../../components/MapStatisticsWidget';
const Dashboard = () => {
    const router = useRouter()
    const [selectedState, setSelectedState] = useState<string>("");
    return (
        <>
            <h1 className="text-white text-3xl font-x mb-4">Dashboard</h1>
            <div className='flex flex-row justify-between '>
                < KrMap gstyle={"w-[500px] h-[500px]  hover:fill-black  "}
                    pstyle={"  stroke-[5px] stroke-[#55ffe1] hover:fill-[#354d84] hover:scale-115 delay-0"} setSelectedState={setSelectedState} />

                <div className='flex flex-col items-center'>
                    <MapStatisticsWidget District={selectedState} />
                    <h1 onClick={() => router.push('/details')}>Learn More</h1>
                    <div className="w-full bg-[#040620] rounded-md mt-2  flex items-center">
                        <input type="text" className="m-2 w-full bg-[#040620] text-white placeholder-white focus:outline-none" placeholder="Search..." />
                        <div className="bg-[#474D84] rounded rounded-bl-none rounded-tl-none    w-[40px] h-full flex justify-center items-center">
                            <SearchIcon className="text-white w-4 h-4" />
                        </div>
                    </div>
                    <div className='mx-3  my-8 h-[200px] w-full rounded-md border-dashed border-blue-400 
                         bg-[#0000003d]
                         '>
                        <div className='p-4 h-full w-full rounded-md bg-[#0000003d]'>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Dashboard