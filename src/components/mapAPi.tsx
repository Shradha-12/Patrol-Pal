// import React, { useEffect, useRef } from 'react';
// import * as tt from '@tomtom-international/web-sdk-maps';

// interface TomTomMapProps {
//   apiKey: string; // Replace with your actual API key
// }

// const Mapapi: React.FC<TomTomMapProps> = ({ apiKey }) => {
//   const mapContainerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const center = [4, 44.4];

//     const map = tt.map({
//       key: apiKey,
//       container: mapContainerRef.current,
//       center: center,
//       zoom: 10,
//     });

//     map.on('load', () => {
//       new tt.Marker().setLngLat(center).addTo(map);
//     });

//     // Cleanup map when component unmounts
//     return () => map.remove();
//   }, [apiKey]); // Ensure effect updates when apiKey changes

//   return (
//     <div id="map" ref={mapContainerRef} style={{ width: '100%', height: '100%' }}></div>
//   );
// };

// export default Mapapi;
