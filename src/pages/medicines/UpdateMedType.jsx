import React from "react";

const UpdateMedType = () => {
  const fields = [{ id: 'type', label: 'Label' }];
  return (
    <>
      <Edit
        fields={fields}
        endpoint="admin/medicineTypes"
        redirectPath="/medicines/medicineTypes"
      />
    </>)
};

export default UpdateMedType;
