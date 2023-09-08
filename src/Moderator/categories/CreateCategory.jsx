import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Create from '../../pages/utils/Create';

const MCreateCategory = () => {
  const categoryFields = [
    { name: 'name', label: 'Category Name', type: 'text' },
    { name: 'image', label: 'Category Image', type: 'file' },
  ];
  const breadcrumbItems = [
    { url: '/moderator/categories', label: 'Categories' },
    { url: '/moderator/categories', label: 'Create Category' },
  ];
  return (
    <>
      <BreadCrumb back={'/Moderator'} place={breadcrumbItems} />
      <Create
        fields={categoryFields}
        endpoint="moderator/categories"
        redirectPath="../categories"
      />
    </>
  );
};

export default MCreateCategory;
