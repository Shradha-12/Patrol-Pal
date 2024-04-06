import React from 'react'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

import { InputAdornment } from '@mui/material';

export default function Topbar() {
    return (
        <nav className=" border border-black fixed w-full top-0 h-[60px] px-5 flex flex-row justify-between items-center">
            <span className="font-semibold text-xl tracking-tight text-white">PatrolPal</span>
            <div className="bg-[#040620] rounded-md p-2 ">
                <div className="flex items-center">

                    <input type="text" className="w-full bg-[#040620] text-white placeholder-white focus:outline-none" placeholder="Search..." />

                    <SearchIcon className='text-white pl-1 no-underline w-[25px] h-[25px]' />
                </div>
            </div>

        </nav>
    )
}
