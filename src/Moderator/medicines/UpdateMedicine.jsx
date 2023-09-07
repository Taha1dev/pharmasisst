import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const MUpdateMedicine = () => {
  const breadcrumbItems = [
    { url: '/moderator/Medicines', label: 'Medicines' },
    { url: '/moderator/Medicines', label: 'Update Medicine' },
  ];
  return (
    <div>
      <BreadCrumb back={'/Moderator'} place={breadcrumbItems} />
      <h1 className="text-2xl">Update Medicine</h1>
    </div>
  );
};

export default MUpdateMedicine;
