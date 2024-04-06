import React from 'react'

interface IProgressBar {
    value: string
}
const ProgressBar = ({ value }: IProgressBar) => {
    return (
        <div className="h-1    rounded-md overflow-hidden bg-[#474D84]">
            <div className="h-full bg-blue-500" style={{ width: value }}></div>
        </div>

    )
};

export default ProgressBar;
