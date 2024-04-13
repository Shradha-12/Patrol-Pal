'use client'
import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useRouter } from 'next/router';

const containerStyle = {
    width: '700px',
    height: '400px'
};

const center = {
    lat: 12.971599,
    lng: 77.594566
};

interface IDetailView {

    District: string;
}
const DetailView = ({ District }: IDetailView) => {
    // const router = useRouter();
    // const { data } = router.query;  
  
    // const receivedData = JSON.parse(data);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBqpWMZ3LbWXIaF7ZDX_9uzFjLWdIzrwDE"
    })

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
        <>
            <h1 className="text-white text-3xl font-x mb-4">District:{ }</h1>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col items-center">
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={4}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                            options={{
                                streetViewControl: false
                            }}
                        >
                            <Marker position={{
                                lat: 12.971599,
                                lng: 77.594566
                            }} />
                            <Marker position={{
                                lat: 12.971598,
                                lng: 77.594566
                            }} />
                        </GoogleMap>

                    ) : (
                        <>
                            <div className="w-[700px] h[400px]">
                                Something went while loading Map
                            </div>
                        </>
                    )}


                </div>
                <div className="w-[400px] h-[400px] border">
                    <ButtonGroup variant="outlined" aria-label="Basic button group">
                        <Button>Camera</Button>
                        <Button>Police Stations</Button>
                        <Button>Cases</Button>
                    </ButtonGroup>
                </div>
            </div>
        </>
    );
}
export default DetailView;
