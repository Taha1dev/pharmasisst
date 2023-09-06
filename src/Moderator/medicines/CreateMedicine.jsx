import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const MCreateMedicine = () => {
  const breadcrumbItems = [
    { url: '/moderator/Medicines', label: 'Medicines' },
    { url: '/moderator/Medicines', label: 'Create Medicine' },
  ];
  return (
    <div>
      <BreadCrumb back={'/Moderator'} place={breadcrumbItems} />
      <h1 className="text-2xl">Create Medicine</h1>
    </div>
  );
};

export default MCreateMedicine;
