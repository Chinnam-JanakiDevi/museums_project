// https://www.google.com/maps/d/embed?mid=18wPDBbyaFgy1l4CALgb95IrdOyhp1jg&ehbc=2E312F&noprof=1

import React from 'react';
import './Tourism.css';
const Tourism = () => {
    return (
        <div>
            <button><a href='https://www.google.com/maps/d/embed?mid=18wPDBbyaFgy1l4CALgb95IrdOyhp1jg&ehbc=2E312F&noprof=1' className="map-link">View Full Map</a></button>
            <iframe
                title="Google Maps"
                src="https://www.google.com/maps/d/embed?mid=18wPDBbyaFgy1l4CALgb95IrdOyhp1jg&ehbc=2E312F&noprof=1"
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
            {/* <iframe src="https://www.google.com/maps/d/embed?mid=18wPDBbyaFgy1l4CALgb95IrdOyhp1jg&ehbc=2E312F&noprof=1" width="640" height="480"></iframe> */}

        </div>
    );
};

export default Tourism;
