import React from 'react'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation'

import { InputAdornment } from '@mui/material';

export default function Topbar() {
    const router = useRouter();
    return (
        <nav className="z-50 fixed   border border-white w-full top-0 h-[60px] px-5 flex flex-row justify-between items-center">
            <span className="font-semibold text-xl tracking-tight text-white">PatrolPal</span>
            {/* <div className="bg-[#040620] rounded-md p-2 ">
                <div className="flex items-center">

                    <input type="text" className="w-full bg-[#040620] text-white placeholder-white focus:outline-none" placeholder="Search..." />

                    <SearchIcon className='text-white pl-1 no-underline w-[25px] h-[25px]' />
                </div>
            </div> */}
            <button className='py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75' onClick={() => router.push('/details')}>Login</button>

        </nav>
    )
}
