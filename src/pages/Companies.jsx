import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';

const Companies = () => {
  const breadcrumbItems = [{ url: '/Companies', label: 'Companies' }];
  return (
    <>
      <BreadCrumb place={breadcrumbItems} />
      <div>Companies</div>
    </>
  );
};

export default Companies;
