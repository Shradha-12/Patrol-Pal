import React, { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ProgressBarWidget from './ProgressBarWidget';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import MapStats from '../assets/data/mapstats';

interface IMapStatisticsWidget {
    District: string;
    coordinates: [number, number]
    Mapstats: {
        CrimeRate: string,
        PoliceStations: string,
        PendingCases: string
    }
}



const MapStatisticsWidget = (data: IMapStatisticsWidget) => {
    const [copyPop, setCopyPop] = useState(false);

    return (
        <div className="flex flex-col text-white w-[500px]">
            <h1 className='font-semibold'> Map Stats</h1>
            <h1 className='font-semibold'> District: <span className='font-light'>{data.District}</span></h1>
            <h1 className='font-semibold'><MyLocationIcon /> <span className='font-light'>{data.coordinates}</span> <CopyToClipboard onCopy={() => setCopyPop(true)} text={data.coordinates.map(x => x.toString()).join(',')}><ContentCopyIcon className='hover:bg-slate-500' /></CopyToClipboard></h1>
            <Snackbar
                open={copyPop}
                autoHideDuration={6000}
                onClose={() => setCopyPop(false)}
                message="Location copied to clipboard !"
                action={<CloseIcon onClick={() => setCopyPop(false)}></CloseIcon>}
            />
            <ProgressBarWidget heading={'Crime Rate'} percentage={data.Mapstats.CrimeRate} color={"bg-blue-500"} />
            <ProgressBarWidget heading={'Police Stations'} percentage={data.Mapstats.PoliceStations} color={"bg-blue-500"} />
            <ProgressBarWidget heading={'Pending Cases'} percentage={data.Mapstats.PendingCases} color={"bg-blue-500"} />
            <ProgressBarWidget heading={'Crime Rate'} percentage={data.Mapstats.CrimeRate} color={"bg-blue-500"} />

        </div>

    );
};

export default MapStatisticsWidget;
