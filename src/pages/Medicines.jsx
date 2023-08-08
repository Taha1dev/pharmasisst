import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';

const Medicines = () => {
  const breadcrumbItems = [{ url: '/Medicines', label: 'Medicines' }];

  return (
    <>
      <BreadCrumb place={breadcrumbItems} />
      <div>Medicines</div>
    </>
  );
};

export default Medicines;
