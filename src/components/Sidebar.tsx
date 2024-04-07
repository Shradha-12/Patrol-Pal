import { useRouter } from 'next/navigation'
import React from 'react'

export default function Sidebar() {
    const router = useRouter()
    return (
        <div className='border fixed h-full w-64    p-7 text-white'>
            <span onClick={() => router.push('/')} className=' font-semibold text-l tracking-tight'>Dashboard</span>
            <div>
                <span className=' font-semibold text-l tracking-tight'>Departemnt</span>
                <div className='p-2 font-thin grow '>
                    <h1 className='p-3 hover:bg-gray-800 rounded-lg' onClick={() => router.push('/fir')}>FIR Page</h1>
                    <h1 className='p-3 hover:bg-gray-800 rounded-lg' onClick={() => void (this)}>Upload Data</h1>
                    <h1 className='p-3 hover:bg-gray-800 rounded-lg' onClick={() => void (this)}>Market Place</h1>
                    <h1 className='p-3 hover:bg-gray-800 rounded-lg' onClick={() => void (this)}>See Complaints</h1>
                </div>
            </div>
            <div className=' '>
                <span className='font-semibold text-l tracking-tight'>Users</span>
                <div className='p-2 font-thin'>
                    <h1 className='p-3 hover:bg-gray-800 rounded-lg' onClick={() => void (this)}>Raise Complaints</h1>
                    <h1 className='p-3 hover:bg-gray-800 rounded-lg' onClick={() => void (this)}>Market Place</h1>
                    <h1 className='p-3 hover:[#F6DA08] rounded-lg bg-[#FFD700]' onClick={() => router.push('/mvp')}>MVP</h1>
                </div>
            </div>
        </div>
        // <div className="bg-gray-800 text-white w-64 h-full">

        //     <h1 className="text-2xl p-4">Sidebar</h1>
        //     {/* Add your sidebar content here */}
        // </div>


    )
}
