import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Edit from '../../pages/utils/Edit';

const MUpdateCompany = () => {
  const breadcrumbItems = [
    { url: '/moderator/companies', label: 'companies' },
    { url: '/moderator/companies', label: 'Update Company' },
  ];
  const companyFields = [
    { name: 'name', label: 'Company Name', type: 'text' },
    { name: 'image', label: 'Company Image', type: 'file' },
  ];
  return (
    <>
      <BreadCrumb back={'/Moderator'} place={breadcrumbItems} />
      <h1 className="text-2xl">Update Company</h1>
      <Edit
        fields={companyFields}
        endpoint="moderator/companies"
        redirectPath="../companies"
      />
    </>
  );
};

export default MUpdateCompany;
