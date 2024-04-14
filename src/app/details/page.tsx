'use client'
import React, { useState } from 'react'
import { PieChart } from '@mui/x-charts';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Button from '@mui/material/Button';
import Image from 'next/image'
import PostAddIcon from '@mui/icons-material/PostAdd';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useRouter } from 'next/router';
import DetailPageData from '../../assets/data/DetailPageData'
import Card from '@mui/material/Card';
import Link from 'next/link';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddIcon from '@mui/icons-material/Add';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Category } from '@mui/icons-material';
const containerStyle = {
    width: '700px',
    height: '400px'
};

const center = {
    lat: 12.971599,
    lng: 77.594566
};

const DetailView = ({ searchParams }: { searchParams: { district: string } }) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBqpWMZ3LbWXIaF7ZDX_9uzFjLWdIzrwDE"
    })

    const [category, setCategory] = useState<string>("Camera");

    const [map, setMap] = useState(null)

    const onLoad = React.useCallback(function callback(map: any) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
    }, [])

    return (
        <div>
            <h1 className="text-white text-3xl font-x mb-4">District: {searchParams.district}</h1>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col items-center">
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={19}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                            options={{
                                streetViewControl: false
                            }}
                        >
                            {
                                DetailPageData
                                    .filter(item => item.type === category)
                                    .map((item, index) => (
                                        <Marker
                                            key={index}
                                            position={{ lat: item.lat, lng: item.lng }}
                                        />
                                    ))
                            }
                        </GoogleMap>
                    ) : (
                        <>
                            <div className="w-[700px] h[400px]">
                                Something went while loading Map
                            </div>
                        </>
                    )}
                </div>
                <div className="w-[400px] h-[400px]   ">
                    <Button variant='outlined' className="m-2" onClick={() => setCategory("Camera")}>Camera</Button>
                    <Button variant='outlined' className="m-2" onClick={() => setCategory("PoliceStations")}>Police Stations</Button>
                    <Button variant='outlined' className="m-2" onClick={() => setCategory("Cases")}>Cases</Button>
                    <div className="className='mx-3  my-8  w-full rounded-md border-dashed    py-2
                         bg-[#0000003d]
                         '">
                        {category == "Cases" && 
                        <PieChart className=" "
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'Pending Cases' },
                                        { id: 1, value: 15, label: 'Closed Cases' },
                                        { id: 2, value: 20, label: 'New Cases' },
                                    ],
                                },
                            ]}
                            slotProps={{
                                legend: {
                                    labelStyle: {
                                        fontSize: 14,
                                        fill: 'white',
                                    },
                                },
                            }}
                            width={400}
                            height={200}
                        />}
                        {category == "Camera" &&
                         <PieChart className=" "
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'Working' },
                                        { id: 1, value: 2, label: 'Defective' },
                                        { id: 2, value: 5, label: 'Review Pending' },
                                    ],
                                },
                            ]}
                            slotProps={{
                                legend: {
                                    labelStyle: {
                                        fontSize: 14,
                                        fill: 'white',
                                    },
                                },
                            }}
                            width={400}
                            height={200}
                        />}
                        {category == "PoliceStations" && 
                        <PieChart className=" "
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 12, label: 'Police station 1' },
                                        { id: 1, value: 11, label: 'Police station 2' },
                                        { id: 2, value: 19, label: 'Police station 3' },
                                    ],
                                },
                            ]}
                            slotProps={{
                                legend: {
                                    labelStyle: {
                                        fontSize: 14,
                                        fill: 'white',
                                    },
                                },
                            }}
                            width={400}
                            height={200}
                        />}

                    </div>
                </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
                <Card className='  font-semibold    bg-[#0000003d] text-white'>
                    <div className="flex flex-row items-center p-4 gap-4">
                        <div className="flex flex-col">
                            <h2 className="text-base">Police Station</h2>
                            <p className="text-xs">123 Main St, Springfield</p>
                        </div>
                        <Button size="small" variant="outlined">
                            <PostAddIcon className="w-4 h-4" />
                            <span className="sr-only">Edit</span>
                        </Button>
                    </div>
                    <div className="p-4 flex flex-col items-center justify-center">
                        <Image
                            alt="Police station"
                            className="rounded-full border"
                            height="100"
                            src="https://t3.ftcdn.net/jpg/05/88/65/94/360_F_588659494_K4HwUqOEf0r0SawRm6uFmKq0MruHkGpJ.jpg"
                            style={{
                                aspectRatio: "100/100",
                                objectFit: "cover",
                            }}
                            width="100"
                        />
                    </div>
                    <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center gap-2 text-xs">
                            <LocalPhoneIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            <Link href="#" className="underline">123-456-7890</Link>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <EmailIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            <Link href="#" className="underline">info@example.com</Link>
                        </div>
                    </div>
                </Card>
                <Card className="bg-[#0000003d]  font-semibold text-white">
                    <div className="flex flex-row items-center p-4 gap-4">
                        <div className="flex flex-col">
                            <h2 className="text-base">Ongoing Cases</h2>
                            <p className="text-xs">5 cases in progress</p>
                        </div>
                        <Button size="small" variant="outlined">
                            <AddIcon className="w-4 h-4" />
                            <span className="sr-only">Add</span>
                        </Button>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                        <div className="flex items-center gap-2">
                            <FileCopyIcon className="w-4 h-4" />
                            <Link href="#" className="underline">Case #001</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <FileCopyIcon className="w-4 h-4" />
                            <Link href="#" className="underline">Case #002</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <FileCopyIcon className="w-4 h-4" />
                            <Link href="#" className="underline">Case #003</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <FileCopyIcon className="w-4 h-4" />
                            <Link href="#" className="underline">Case #004</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <FileCopyIcon className="w-4 h-4" />
                            <Link href="#" className="underline">Case #005</Link>
                        </div>
                    </div>
                </Card>
                <Card className="bg-[#0000003d]  font-semibold text-white">
                    <div className="flex flex-row items-center p-4 gap-4">
                        <div className="flex flex-col">
                            <h2 className="text-base">Camera Locations</h2>
                            <p className="text-xs">10 cameras nearby</p>
                        </div>
                        <Button size="small" variant="outlined">
                            <AddIcon className="w-4 h-4" />
                            <span className="sr-only">Add</span>
                        </Button>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                        <div className="flex items-center gap-2">
                            <LocationOnIcon className="w-4 h-4" />
                            <Link href="#" className="underline">1st & Main</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <LocationOnIcon className="w-4 h-4" />
                            <Link href="#" className="underline">5th & Elm</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <LocationOnIcon className="w-4 h-4" />
                            <Link href="#" className="underline">3rd & Oak</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <LocationOnIcon className="w-4 h-4" />
                            <Link href="#" className="underline">2nd & Pine</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <LocationOnIcon className="w-4 h-4" />
                            <Link href="#" className="underline">4th & Cedar</Link>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
export default DetailView;
