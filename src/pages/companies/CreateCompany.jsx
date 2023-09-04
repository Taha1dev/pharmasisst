// Example usage in a component for creating companies
import React from 'react';
import Create from '../utils/Create';

const CreateCompany = () => {
  const companyFields = [
    { name: 'name', label: 'Company Name', type: 'text' },
    { name: 'image', label: 'Company Image', type: 'file' },  
  ];

  return (
    <Create
      fields={companyFields}
      endpoint="admin/companies"
      redirectPath="/companies"
    />
  );
};

export default CreateCompany;
