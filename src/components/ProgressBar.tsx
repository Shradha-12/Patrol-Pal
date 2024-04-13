import React from 'react'

interface IProgressBar {
    value: string
    color: string
}
const ProgressBar = ({ value, color }: IProgressBar) => {
    return (
        <div className="h-1 rounded-md overflow-hidden bg-[#474D84]">
            <div className={`h-full ${color}`} style={{ width: value }}></div>
        </div>

    )
};

export default ProgressBar;
