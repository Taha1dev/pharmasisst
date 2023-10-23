// Example usage in a component for creating companies

import Create from '../utils/Create';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const CreateCompany = () => {
  const companyFields = [
    { name: 'name', label: 'Company Name', type: 'text' },
    { name: 'image', label: 'Company Image', type: 'file' },
  ];
  const breadcrumbItems = [
    { url: '/companies', label: 'Categories' },
    { url: '/companies/createcompany', label: 'Create Company' },
  ];
  return (
    <>
      <BreadCrumb back={'/'} place={breadcrumbItems} />
      <Create
        fields={companyFields}
        endpoint="admin/companies"
        redirectPath="/companies"
      />
    </>
  );
};

export default CreateCompany;
