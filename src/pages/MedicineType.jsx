import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';

const MedicineType = () => {
  const breadcrumbItems = [{ url: '/MedicineType', label: 'Medicine Type' }];

  return (
    <>
      <BreadCrumb place={breadcrumbItems} />
      <div>MedicineType</div>
    </>
  );
};

export default MedicineType;
