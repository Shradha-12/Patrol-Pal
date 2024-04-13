import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditIcon from '@mui/icons-material/Edit';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PublicIcon from '@mui/icons-material/Public';
import ReportIcon from '@mui/icons-material/Report';

export default function Sidebar() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('');

    const handleTabClick = (route: string) => {
        router.push(route);
        setActiveTab(route);
    };

    return (
        <div className='border fixed h-full w-64 p-7 text-white'>
            <h1
                onClick={() => handleTabClick('/dashboard')}
                className={` p-3 rounded-lg  font-semibold text-l tracking-tight cursor-pointer ${activeTab === '/dashboard' ? 'bg-gray-800' : 'hover:bg-gray-800'
                    }`}
            >
                <DashboardIcon /> Dashboard
            </h1>
            <div className="pt-5">
                <h1 className='font-semibold text-l tracking-tight'>Department</h1>
                <div className='p-2 font-thin grow'>

                    <h1
                        className={`p-3 rounded-lg cursor-pointer ${activeTab === '/mvp' ? 'bg-gray-800' : 'hover:bg-gray-800'
                            }`}
                        onClick={() => handleTabClick('/mvp')}
                    >
                        <CloudUploadIcon /> Upload Data
                    </h1>

                    <h1
                        className={`p-3 rounded-lg cursor-pointer ${activeTab === '/complaints' ? 'bg-gray-800' : 'hover:bg-gray-800'
                            }`}
                        onClick={() => handleTabClick('/complaints')}
                    >
                        <ReportIcon /> See Complaints
                    </h1>
                    <h1
                        className={`p-3 rounded-lg cursor-pointer ${activeTab === '/editMarketplace' ? 'bg-gray-800' : 'hover:bg-gray-800'
                            }`}
                        onClick={() => handleTabClick('/editMarketplace')}
                    >
                        <EditIcon /> Edit Marketplace
                    </h1>
                </div>
            </div>
            <div className=''>
                <h1 className='font-semibold text-l tracking-tight'>Users</h1>
                <div className='p-2 font-thin'>
                    <h1
                        className={`p-3 rounded-lg cursor-pointer ${activeTab === '/raiseComplaints' ? 'bg-gray-800' : 'hover:bg-gray-800'
                            }`}
                        onClick={() => handleTabClick('/fir')}
                    >
                        <ListAltIcon /> Raise Complaints
                    </h1>
                    <h1
                        className={`p-3 rounded-lg cursor-pointer ${activeTab === '/marketplace' ? 'bg-gray-800' : 'hover:bg-gray-800'
                            }`}
                        onClick={() => handleTabClick('/marketplace')}
                    >
                        <PublicIcon /> Market Place
                    </h1>
                </div>
            </div>
        </div>
    );
}
