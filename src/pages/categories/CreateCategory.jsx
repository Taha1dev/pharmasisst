// Example usage in a component for creating categories
import React from 'react';
import Create from '../utils/Create';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const CreateCategory = () => {
  const categoryFields = [
    { name: 'name', label: 'Category Name', type: 'text' },
    { name: 'image', label: 'Category Image', type: 'file' },
  ];
  const breadcrumbItems = [
    { url: '/Categories', label: 'Categories' },
    { url: '/Categories/createcategory', label: 'Create Category' },
  ];

  return (
    <>
      <BreadCrumb back={'/'} place={breadcrumbItems} />
      <Create
        fields={categoryFields}
        endpoint="admin/categories"
        redirectPath="/categories"
      />
    </>
  );
};

export default CreateCategory;
