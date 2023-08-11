import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import DynamicTable from '../components/table/Dynamictable';

const Companies = () => {
  const breadcrumbItems = [{ url: '/Companies', label: 'Companies' }];
  return (
    <>
      <BreadCrumb place={breadcrumbItems} />
      <div>Companies</div>
      <DynamicTable/>
    </>
  );
};

export default Companies;
