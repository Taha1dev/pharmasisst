// Example usage in a component for creating categories
import React from 'react';
import Create from '../utils/Create';

const CreateCategory = () => {
  const categoryFields = [
    { name: 'name', label: 'Category Name', type: 'text' },
    { name: 'image', label: 'Category Image', type: 'file' },
  ];

  return (
    <Create
      fields={categoryFields}
      endpoint="admin/categories"
      redirectPath="/categories"
    />
  );
};

export default CreateCategory;
