import React, { useState } from 'react';

const TrackingInput = () => {
  const [trackingId, setTrackingId] = useState('');

  const handleTrack = () => {
    console.log('Tracking ID:', trackingId);
    // Add your tracking logic here
  };

  return (
    <div style={{
      margin: '8rem 2rem 2rem 2rem', // Space from corners
      padding: '3rem 2rem',
      borderRadius: '24px', // Rounded corners
      backgroundImage: 'url("https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg")', // Add your image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Optional: Dark overlay for better text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
        borderRadius: '24px',
        zIndex: 1
      }}></div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem'
      }}>
        {/* Heading */}
        <div style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          letterSpacing: '0.5px',
          lineHeight: '1.4'
        }}>
          Redefining Logistics With The Most Innovative Approach!
        </div>

        {/* Input and Button Container */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {/* Input Box */}
          <input
            type="text"
            placeholder="Enter tracking id"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              border: '2px solid white',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent
              backdropFilter: 'blur(10px)', // Glass effect
              color: 'white',
              outline: 'none',
              width: '300px',
              fontWeight: '500'
            }}
          />

          {/* Button */}
          <button
            onClick={handleTrack}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              backgroundColor: 'white',
              color: '#333',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f0f0f0';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Track Shipment
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackingInput;
