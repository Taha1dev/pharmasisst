import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Edit from '../../pages/utils/Edit';

const MUpdateCategory = () => {
  const breadcrumbItems = [
    { url: '/moderator/categories', label: 'Categories' },
    { url: '/moderator/categories', label: 'Update Category' },
  ];
  const categoryFields = [
    { name: 'name', label: 'Category Name', type: 'text' },
    { name: 'image', label: 'Category Image', type: 'file' },
  ];
  return (
    <>
      <BreadCrumb back={'/Moderator'} place={breadcrumbItems} />
      <Edit
        fields={categoryFields}
        endpoint="moderator/categories"
        redirectPath="../categories"
      />
    </>
  );
};

export default MUpdateCategory;
