import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Loading from '../../components/logout/Logout';
import useData from '../../HOOkS/useData';
import DynamicTable from '../../components/table/Dynamictable';

const MedicineType = () => {
  const breadcrumbItems = [{ url: '/MedicineType', label: 'Medicine Type' }];
  const { isLoading, records, handleDelete } = useData('admin/medicineTypes');
  const columns = [{ id: 'type', label: 'Label' }];
  return (
    <>
      <BreadCrumb place={breadcrumbItems} />
      <h2>Drug Labels</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <DynamicTable
          columns={columns}
          data={records}
          onDelete={handleDelete}
          addPath={'./CreateCompany'}
          updatePath={`./updateCompany`}
        />
      )}
    </>
  );
};

export default MedicineType;
