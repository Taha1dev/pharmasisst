import React from 'react';
import Edit from '../utils/Edit';

const UpdateCategory = () => {
  const categoryFields = [
    { name: 'name', label: 'Category Name', type: 'text' },
    { name: 'image', label: 'Category Image', type: 'file' },
  ];
  return (
    <div>
      <h1>UpdateCategory</h1>
      <Edit
        fields={categoryFields}
        endpoint="admin/categories"
        redirectPath="/categories"
      />{' '}
    </div>
  );
};

export default UpdateCategory;
