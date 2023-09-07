
import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import { Link } from 'react-router-dom';

const MmedicineTypes = () => {
  const breadcrumbItems = [{ url: '/Moderator/medicinetypes', label: 'Drug Labels' }];

  return (
    <div>
    <BreadCrumb back={'/Moderator'} place={breadcrumbItems} />
    <Link to='createMedtype'>create</Link>
    <br />
    <Link to='updateMedtype/1'>update</Link>
  </div>
  );
};

export default MmedicineTypes;
