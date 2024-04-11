import { useRouter } from 'next/navigation'
import React from 'react'

export default function Sidebar() {
    const router = useRouter()
    return (
        <div className='border fixed h-full w-64    p-7 text-white'>
            <h1 onClick={() => router.push('/dashboard')} className=' font-semibold text-l tracking-tight'>Dashboard</h1>
            <div>
                <h1 className=' font-semibold text-l tracking-tight'>Departemnt</h1>
                <div className='p-2 font-thin grow '>
                    <h1 className='p-3 hover:bg-gray-800 rounded-lg' onClick={() => router.push('/fir')}>FIRs</h1>
                    <h1 className='p-3 hover:bg-gray-800 rounded-lg' onClick={() => router.push('/mvp')}>Upload Data</h1>
                    <h1 className='p-3 hover:bg-gray-800 rounded-lg' onClick={() => void (this)}>Market Place</h1>
                    <h1 className='p-3 hover:bg-gray-800 rounded-lg' onClick={() => router.push('/mvp')}>See Complaints</h1>
                </div>
            </div>
            <div className=' '>
                <h1 className='font-semibold text-l tracking-tight'>Users</h1>
                <div className='p-2 font-thin'>
                    <h1 className='p-3 hover:bg-gray-800 rounded-lg' onClick={() => router.push('/fir')}>Raise Complaints</h1>
                    <h1 className='p-3 hover:bg-gray-800 rounded-lg' onClick={() => router.push('/marketplace')}>Market Place</h1>

                </div>
            </div>
        </div>
    )
}
