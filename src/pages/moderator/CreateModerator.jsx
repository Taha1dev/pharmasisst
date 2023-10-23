import Create from '../utils/Create';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const CreateModerator = () => {
  const fields = [
    { name: 'first_name', label: 'First Name', type: 'text' },
    { name: 'last_name', label: 'Last Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'password', type: 'password' },
    { name: 'phone_number', label: 'Mobile', type: 'number' },
  ];
  const breadcrumbItems = [{ url: '/moderator', label: 'Moderators' }];
  return (
    <div>
      <BreadCrumb back={'/'} place={breadcrumbItems} />

      <h1 className="text-2xl">Add New Moderator</h1>
      <Create
        fields={fields}
        endpoint="admin/moderators"
        redirectPath="/subadmins"
      />
    </div>
  );
};

export default CreateModerator;
