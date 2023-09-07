import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import { Link } from 'react-router-dom';

const ModeratorMedicines = () => {
  const breadcrumbItems = [{ url: '/Moderator/Medicines', label: 'Medicines' }];

  return (
    <div>
    <BreadCrumb back={'/Moderator'} place={breadcrumbItems} />
    <Link to='createMedicine'>create</Link>
    <br />
    <Link to='updateMedicine/1'>update</Link>
  </div>
  );
};

export default ModeratorMedicines;
