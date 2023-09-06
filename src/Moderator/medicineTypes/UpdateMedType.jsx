import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const MUpdateMedType = () => {
  const breadcrumbItems = [
    { url: '/moderator/medicinetypes', label: 'Drug Label' },
    { url: '', label: 'Update Drug Label' },
  ];
  return (
    <div>
      <BreadCrumb back={'/Moderator'} place={breadcrumbItems} />
      <h1 className="text-2xl">Update Drug Label</h1>
    </div>
  );
};

export default MUpdateMedType;
