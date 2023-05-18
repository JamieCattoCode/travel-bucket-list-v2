import React from 'react';
import { useLocation } from 'react-router-dom';

const LocationDetail = () => {
  const location = useLocation();
  const { pathname: path } = location;
  const xid = path.split('/')[2];

  return (
    <div>LocationDetail</div>
  );
};

export default LocationDetail;
