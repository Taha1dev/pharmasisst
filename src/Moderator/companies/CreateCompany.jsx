import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const MCreateCompany = () => {
  const breadcrumbItems = [
    { url: '/moderator/companies', label: 'companies' },
    { url: '/moderator/companies', label: 'Create company' },
  ];
  return (
    <div>
      <BreadCrumb back={'/Moderator'} place={breadcrumbItems} />
      <h1 className='text-2xl'>Create Category</h1>

    </div>
  );
};

export default MCreateCompany;
