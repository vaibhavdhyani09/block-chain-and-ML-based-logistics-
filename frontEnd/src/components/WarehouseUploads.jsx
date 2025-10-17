import React, { useState } from 'react';
import ShipmentBlockchain from './ShipmentBlockchain';
import './WarehouseUpload.css';

const WarehouseUpload = () => {
  const [showBlockchainUpload, setShowBlockchainUpload] = useState(false);

  const handleOpenUpload = () => {
    setShowBlockchainUpload(true);
  };

  const handleCloseUpload = () => {
    setShowBlockchainUpload(false);
  };

  return (
    <div className="warehouse-section">
      <div className="warehouse-container">
        <div className="warehouse-header">
          <h2>Warehouse Management</h2>
          <p>Upload parcel data to blockchain for secure tracking</p>
        </div>

        {!showBlockchainUpload ? (
          <div className="warehouse-upload-trigger">
            <div className="upload-card">
              <div className="upload-icon">
                <svg 
                  width="64" 
                  height="64" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3>Parcel Received at Warehouse</h3>
              <p>Click below to register shipment on blockchain</p>
              <button 
                className="upload-blockchain-btn"
                onClick={handleOpenUpload}
              >
                <span></span> Upload to Blockchain
              </button>
            </div>
          </div>
        ) : (
          <div className="blockchain-upload-container">
            <div className="close-btn-container">
              <button 
                className="close-btn"
                onClick={handleCloseUpload}
              >
                ✕ Close
              </button>
            </div>
            <ShipmentBlockchain />
          </div>
        )}
      </div>
    </div>
  );
};

export default WarehouseUpload;
