import React from 'react';
import './Map.css';
const Map = () => {
    return (
        <div>
            <button><a href='https://www.google.com/maps/d/edit?mid=1cDxj9YAo__fKSWB4clCx1A90FM_ML2Y&usp=sharing' className="map-link">View Full Map</a></button>
            <iframe
                title="Google Maps"
                src="https://www.google.com/maps/d/embed?mid=1cDxj9YAo__fKSWB4clCx1A90FM_ML2Y&ehbc=2E312F&noprof=1"
                width="100%"
                height="800"
                frameborder="0"
                aria-hidden="false"
                tabindex="0"
                style={{
                    border: '2px solid #ccc',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
            ></iframe>

        </div>
    );
};

export default Map;
