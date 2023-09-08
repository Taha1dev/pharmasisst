import React from 'react';
import Create from '../utils/Create';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const CreateMedType = () => {
  const fields = [{ name: 'type', label: 'add new medicine info' }];
  const breadcrumbItems = [
    { url: '/medicines/medicinetype', label: 'Drug Labels' },
    { url: '/medicines/createmedtype', label: 'Create Drug Label' },
  ];
  return (
    <>
      <BreadCrumb back={'/'} place={breadcrumbItems} />
      <Create
        fields={fields}
        endpoint="admin/medicineTypes"
        redirectPath="/medicines/medicineType"
      />
    </>
  );
};

export default CreateMedType;
