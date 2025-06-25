import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '8px',
};

const centerDefault = {
  lat: 10.762622,
  lng: 106.660172,
};

const StaticGoogleMap = ({ address, apiKey }) => {
  const [center, setCenter] = useState(centerDefault);

  const handleMapLoad = () => {
    if (!address || !window.google) return;

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const location = results[0].geometry.location;
        setCenter({
          lat: location.lat(),
          lng: location.lng(),
        });
      } else {
        console.error('Geocode failed:', status);
      }
    });
  };

  return (
      <LoadScript googleMapsApiKey={apiKey} libraries={['places']}>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
            onLoad={handleMapLoad} // <- đây là điểm quan trọng
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
  );
};

export default StaticGoogleMap;
