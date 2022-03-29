import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const {countryName} = useParams();
  return (
    <div>
      <h2>Country details for : {countryName}</h2>
    </div>
  );
};

export default CountryDetails;