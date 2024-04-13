import React from 'react'
import ProgressBar from './ProgressBar';

interface IProgressBarWidget {
    heading: string;
    percentage: string;
    color: string;
}
const ProgressBarWidget = ({ heading, percentage, color }: IProgressBarWidget) => {

    return (
        <div className='   p-1 flex flex-row  items-center '>
            <div className='flex flex-col w-full mr-1'>
                <h1 className='font-sm'>{heading}</h1>
                <ProgressBar value={percentage} color={color} />
            </div>
            <div className="m-1 w-[25px] h-[25px] rounded-md overflow-hidden bg-[#474D84] flex text-[9px] justify-center items-center">
                {percentage}
            </div>
        </div>
    )
}
export default ProgressBarWidget;
