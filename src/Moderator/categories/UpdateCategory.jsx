import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const MUpdateCategory = () => {
  const breadcrumbItems = [
    { url: '/moderator/categories', label: 'Categories' },
    { url: '/moderator/categories', label: 'Update Category' },
  ];
  return (
    <div>
      <BreadCrumb back={'/Moderator'} place={breadcrumbItems} />
      <h1 className='text-2xl'>Update Category</h1>
    </div>
  );
};

export default MUpdateCategory;
