import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const MUpdateCompany = () => {
  const breadcrumbItems = [
    { url: '/moderator/companies', label: 'companies' },
    { url: '/moderator/companies', label: 'Update Company' },
  ];
  return (
    <div>
      <BreadCrumb back={'/Moderator'} place={breadcrumbItems} />
      <h1 className="text-2xl">Update Company</h1>
    </div>
  );
};

export default MUpdateCompany;
