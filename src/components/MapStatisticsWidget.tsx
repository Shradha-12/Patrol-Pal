import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import ProgressBarWidget from './ProgressBarWidget';

interface IMapStatisticsWidget {
    District: string;
}



const MapStatisticsWidget = (data: IMapStatisticsWidget) => {

    return (
        <div className="flex flex-col text-white w-[500px]">
            <h1 className='font-semibold'> Map Stats</h1>
            <h1 className='font-semibold'> District: <span className='font-light'>{data.District}</span></h1>
            <ProgressBarWidget heading={'Crime Rate'} percentage={'50%'} color={''} />
            <ProgressBarWidget heading={'Police Stations'} percentage={'50%'} color={''} />
            <ProgressBarWidget heading={'Pending Cases'} percentage={'50%'} color={''} />
            <ProgressBarWidget heading={'Crime Rate'} percentage={'50%'} color={''} />
            {/* <div className="bg-[#040620] rounded-md mt-2  flex items-center">
                <input type="text" className="m-2 w-full bg-[#040620] text-white placeholder-white focus:outline-none" placeholder="Search..." />
                <div className="bg-[#474D84] rounded rounded-bl-none rounded-tl-none    w-[40px] h-full flex justify-center items-center">
                    <SearchIcon className="text-white w-4 h-4" />
                </div>
            </div> */}
        </div>

    );
};

export default MapStatisticsWidget;
