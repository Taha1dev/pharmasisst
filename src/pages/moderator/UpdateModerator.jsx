import Edit from '../utils/Edit';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const UpdateModerator = () => {
  const fields = [
    { name: 'first_name', label: 'First Name', type: 'text' },
    { name: 'last_name', label: 'Last Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'password', type: 'password' },
    { name: 'phone_number', label: 'Mobile', type: 'number' },
  ];
  return (
    <div>
      <BreadCrumb back={'/'} place={breadcrumbItems} />

      <h1 className="text-2xl">Update Moderator</h1>
      <Edit
        fields={fields}
        endpoint="admin/moderators"
        redirectPath="/subadmins"
      />
    </div>
  );
};

export default UpdateModerator;
