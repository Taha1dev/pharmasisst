// Example usage in a component for creating companies
import React from 'react';
import Edit from '../utils/Edit';

const UpdateCompany = () => {
  const companyFields = [
    { name: 'name', label: 'Company Name', type: 'text' },
    { name: 'image', label: 'Company Image', type: 'file' },
  ];

  return (
    <>
      <h1 className="text-3xl">Update Company</h1>
      <Edit
        fields={companyFields}
        endpoint="admin/companies"
        redirectPath="/companies"
      />
    </>
  );
};

export default UpdateCompany;
