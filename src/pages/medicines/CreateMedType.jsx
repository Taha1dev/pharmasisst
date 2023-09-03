import React from 'react';
import Create from '../utils/Create';

const CreateMedType = () => {
  const fields = [{ id: 'type', label: 'Label' }];
  return (
    <>
      <Create
        fields={fields}
        endpoint="admin/medicineTypes"
        redirectPath="/medicines/medicineTypes"
      />
    </>
  );
};

export default CreateMedType;
