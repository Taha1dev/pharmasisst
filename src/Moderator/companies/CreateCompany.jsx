import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Create from '../../pages/utils/Create';

const MCreateCompany = () => {
  const breadcrumbItems = [
    { url: '/moderator/companies', label: 'companies' },
    { url: '/moderator/companies', label: 'Create company' },
  ];
  const companyFields = [
    { name: 'name', label: 'Company Name', type: 'text' },
    { name: 'image', label: 'Company Image', type: 'file' },
  ];
  return (
    <>
      <BreadCrumb back={'/Moderator'} place={breadcrumbItems} />
      <h1 className="text-2xl">Create Company</h1>
      <Create
        fields={companyFields}
        endpoint="moderator/companies"
        redirectPath="../companies"
      />
    </>
  );
};

export default MCreateCompany;
