"use client"; import React, { useState } from 'react';
import { Select, MenuItem, Button } from '@mui/material'; // Import Select and MenuItem from Material-UI
import Image from 'next/image'

interface APIItem {
    name: string;
    description: string;
    imageLink: string;
    type: string;
    isGov: boolean;
    isPaid: boolean;
    rating: number;
}

const initialAPIs: APIItem[] = [
    {
        name: "Google Maps Platform",
        description: "A comprehensive set of APIs for adding maps, directions, and location data to your applications.",
        imageLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.searce.com%2Fchanges-to-the-google-maps-plans-and-prices-9dd7b78fd054&psig=AOvVaw37w3DsBj0tdrrvtccsViJG&ust=1712896991692000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjA_OCsuYUDFQAAAAAdAAAAABAE",
        type: "web", // Assuming a custom enum for platform support
        isGov: false,
        isPaid: true,
        rating: 4.8
    },
    {
        name: "Apple Maps Connect",
        description: "Manage your business listing on Apple Maps and reach millions of iPhone users.",
        imageLink: "https://www.the-sun.com/wp-content/uploads/sites/6/2023/02/apple-maps-001.jpg",
        type: "web",
        isGov: false,
        isPaid: false, // Can be adjusted if there are paid plans
        rating: 4.5
    },
    {
        name: "Twilio",
        description: "Programmable communication APIs for SMS, voice, video, and authentication.",
        imageLink: "https://intuji.com/_next/image/?url=https%3A%2F%2Fcdn.intuji.com%2F2022%2F05%2FWhat-Is-Twilio-scaled-1.jpg&w=3840&q=75",
        type: "iphone",
        isGov: false,
        isPaid: true,
        rating: 4.7
    },
    {
        name: "National Weather Service API",
        description: "Access real-time and forecast weather data from the US National Weather Service.",
        imageLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNational_Weather_Service&psig=AOvVaw0wuvZRltJiwMh48HKIMDzB&ust=1712897109182000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICWy5CtuYUDFQAAAAAdAAAAABAE",
        type: "iphone",
        isGov: true,
        isPaid: false,
        rating: 4.2
    },
    {
        name: "Stripe",
        description: "A comprehensive payment processing platform for accepting online payments.",
        imageLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkinsta.com%2Fblog%2Fstripe-for-wordpress%2F&psig=AOvVaw297EYyMXU3Fl-Q1_oX7TML&ust=1712897134088000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjf-pqtuYUDFQAAAAAdAAAAABAE",
        type: "android",
        isGov: false,
        isPaid: true,
        rating: 4.9
    },
    {
        name: "OpenStreetMap",
        description: "A collaborative project to create and maintain a free and editable map of the world.",
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Openstreetmap_logo.svg/1200px-Openstreetmap_logo.svg.png",
        type: "web",
        isGov: false,
        isPaid: false,
        rating: 4.3
    },
    {
        name: "Mapbox",
        description: "Cloud-based mapping platform with customization options and location services.",
        imageLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.mapbox.com%2Fhello-explorer-the-new-mapbox-logo-28087a9d5bd7&psig=AOvVaw2iIYzp2_a3JP3-a6OlFd65&ust=1712897180326000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCcnLKtuYUDFQAAAAAdAAAAABAE",
        type: "web",
        isGov: false,
        isPaid: true,
        rating: 4.6
    },
    {
        name: "US Census Bureau API",
        description: "Access demographic and economic data from the US Census Bureau.",
        imageLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FUnited_States_Census_Bureau&psig=AOvVaw1uoIPv1_q42AMeeZduv1Jd&ust=1712897220025000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj7-MOtuYUDFQAAAAAdAAAAABAE",
        type: "web",
        isGov: true,
        isPaid: false,
        rating: 4.1
    },
    {
        name: "SendGrid",
        description: "A cloud-based email delivery platform for sending transactional and marketing emails.",
        imageLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dsendgrid&psig=AOvVaw161AsGHSAk9la7g2LOh9EP&ust=1712897248809000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMDA39GtuYUDFQAAAAAdAAAAABAE",
        type: "web",
        isGov: false,
        isPaid: true,
        rating: 4.4
    },
];

const APIComponent: React.FC = () => {
    const [apis, setAPIs] = useState<APIItem[]>(initialAPIs);
    const [platformFilter, setPlatformFilter] = useState<string>('all');
    const [paymentFilter, setPaymentFilter] = useState<string>('all');
    const [organizationFilter, setOrganizationFilter] = useState<string>('all');

    const filterAPIs = () => {
        const filteredAPIs = initialAPIs.filter(api =>
            (platformFilter === 'all' || api.type === platformFilter) &&
            (paymentFilter === 'all' || (paymentFilter === 'free' && !api.isPaid) || (paymentFilter === 'paid' && api.isPaid)) &&
            (organizationFilter === 'all' || (organizationFilter === 'government' && api.isGov) || (organizationFilter === 'non-government' && !api.isGov))
        );
        setAPIs(filteredAPIs);
    };

    return (
        < >
            <h1 className="text-white text-3xl font-x mb-4">API Marketplace</h1>
            <div className="container mx-auto my-8 p-4 bg-white shadow-md rounded-md">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="w-[20%]">
                        <h2 className="text-xl font-semibold mb-2">Filters</h2>
                        <div className="flex flex-col space-y-2">
                            <div className="flex flex-col">
                                <label htmlFor="platform" className="font-medium">Platform:</label>
                                <Select
                                    id="platform"
                                    value={platformFilter}
                                    onChange={(e) => setPlatformFilter(e.target.value as string)}
                                    className="mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                >
                                    <MenuItem value="all">All</MenuItem>
                                    <MenuItem value="android">Android</MenuItem>
                                    <MenuItem value="iphone">iPhone</MenuItem>
                                    <MenuItem value="web">Web</MenuItem>
                                </Select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="payment" className="font-medium">Payment:</label>
                                <Select
                                    id="payment"
                                    value={paymentFilter}
                                    onChange={(e) => setPaymentFilter(e.target.value as string)}
                                    className="mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                >
                                    <MenuItem value="all">All</MenuItem>
                                    <MenuItem value="free">Free</MenuItem>
                                    <MenuItem value="paid">Paid</MenuItem>
                                </Select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="organization" className="font-medium">Organization:</label>
                                <Select
                                    id="organization"
                                    value={organizationFilter}
                                    onChange={(e) => setOrganizationFilter(e.target.value as string)}
                                    className="mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                >
                                    <MenuItem value="all">All</MenuItem>
                                    <MenuItem value="government">Government</MenuItem>
                                    <MenuItem value="non-government">Non-Government</MenuItem>
                                </Select>
                            </div>
                        </div>
                        <button onClick={filterAPIs} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Apply Filters</button>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold mb-2">Results</h2>
                        {apis.length === 0 ? (
                            <p>No APIs found matching the selected criteria.</p>
                        ) : (
                            <ul className="space-y-4">
                                {apis.map((api, index) => (
                                    <li key={index} className="relative p-4 bg-gray-100 rounded-md flex">
                                        {/* API Image */}
                                        <div className="w-24 h-24 mr-4">
                                            {/* Placeholder Image */}
                                            <Image src={api.imageLink} alt={api.name} width='100' height='100' className="w-full h-full object-cover rounded-md" />
                                        </div>

                                        {/* Rating and Payment */}
                                        <div className="absolute top-0 right-0 flex items-center justify-center">
                                            {/* Green Triangle Cut */}
                                            <div className="bg-green-500 w-0 h-0 border-l-6 border-b-6 border-green-500 transform translate-x-4 -translate-y-4"></div>
                                            {/* Stars */}
                                            <div className="text-white font-semibold ml-1">4.5 ★</div>
                                            {/* Payment Icon */}
                                            {!api.isPaid ? (
                                                <div className="ml-1">
                                                    {/* Free Icon */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                    </svg>
                                                </div>
                                            ) : (
                                                <div className="ml-1">
                                                    {/* Paid Icon */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5m14 0l-7-4m7 4l-7 4m0-5V3a2 2 0 00-2-2H9a2 2 0 00-2 2v6m7 11V9m0 0h4m-4 0H7" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>

                                        {/* Name and Description */}
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-lg font-semibold">{api.name}</h3>
                                            <p className="text-gray-700">{api.description}</p>
                                        </div>
                                    </li>

                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default APIComponent;
