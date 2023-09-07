import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const MCreateCategory = () => {
  const breadcrumbItems = [
    { url: '/moderator/categories', label: 'Categories' },
    { url: '/moderator/categories', label: 'Create Category' },
  ];
  return (
    <div>
      <BreadCrumb back={'/Moderator'} place={breadcrumbItems} />
      <h1 className='text-2xl'>Create Category</h1>

    </div>
  );
};

export default MCreateCategory;
