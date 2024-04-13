import React, { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ProgressBarWidget from './ProgressBarWidget';
import MyLocationIcon from '@mui/icons-material/MyLocation';

interface IMapStatisticsWidget {
    District: string;
    coordinates: [number, number]
}



const MapStatisticsWidget = (data: IMapStatisticsWidget) => {
    const [copyPop, setCopyPop] = useState(false);

    return (
        <div className="flex flex-col text-white w-[500px]">
            <h1 className='font-semibold'> Map Stats</h1>
            <h1 className='font-semibold'> District: <span className='font-light'>{data.District}</span></h1>
            <h1 className='font-semibold'><MyLocationIcon /> <span className='font-light'>{data.coordinates}</span> <CopyToClipboard onCopy={() => setCopyPop(true)} text={'data.coordinates'}><ContentCopyIcon /></CopyToClipboard></h1>
            <Snackbar
                open={copyPop}
                autoHideDuration={6000}
                onClose={() => setCopyPop(false)}
                message="Note archived"
                action={<CloseIcon onClick={() => setCopyPop(false)}></CloseIcon>}
            />
            <ProgressBarWidget heading={'Crime Rate'} percentage={`${Math.floor(Math.random() * 100) + 1}%`} color={"bg-blue-500"} />
            <ProgressBarWidget heading={'Police Stations'} percentage={`${Math.floor(Math.random() * 100) + 1}%`} color={"bg-blue-500"} />
            <ProgressBarWidget heading={'Pending Cases'} percentage={`${Math.floor(Math.random() * 100) + 1}%`} color={"bg-blue-500"} />
            <ProgressBarWidget heading={'Crime Rate'} percentage={`${Math.floor(Math.random() * 100) + 1}%`} color={"bg-blue-500"} />

        </div>

    );
};

export default MapStatisticsWidget;
