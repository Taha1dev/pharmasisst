import Edit from '../utils/Edit';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const UpdateCategory = () => {
  const categoryFields = [
    { name: 'name', label: 'Category Name', type: 'text' },
    { name: 'image', label: 'Category Image', type: 'file' },
  ];
  const breadcrumbItems = [
    { url: '/Categories', label: 'Categories' },
    { url: '/Categories/updatecategory', label: 'Update Category' },
  ];
  return (
    <div>
      <BreadCrumb back={'/'} place={breadcrumbItems} />
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
