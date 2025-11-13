import React from 'react';
import './StorageCard.css';

interface StorageCardProps {
  percentageChange: string;
  storageUsed: string;
  totalStorage: string;
  deviceImage: string;
}

const StorageCard: React.FC<StorageCardProps> = ({
  percentageChange,
  storageUsed,
  totalStorage,
  deviceImage
}) => {
  return (
    <div className="storage-card">
      <div className="storage-card__header">
        <svg className="storage-card__icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 2L14 14M14 2L2 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span className="storage-card__percentage">{percentageChange}</span>
      </div>

      <div className="storage-card__content">
        <div className="storage-card__info">
          <p className="storage-card__label">Storage Used</p>
          <div className="storage-card__usage">
            <span className="storage-card__used">{storageUsed}</span>
            <span className="storage-card__total">/{totalStorage}</span>
          </div>
          <div className="storage-card__progress">
            <div className="storage-card__progress-bar"></div>
          </div>
        </div>

        <div className="storage-card__device">
          <img src={deviceImage} alt="Device" className="storage-card__device-image" />
        </div>
      </div>
    </div>
  );
};

export default StorageCard;
