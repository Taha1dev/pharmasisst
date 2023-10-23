import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import useData from '../../HOOkS/useData';
import Loading from '../../components/logout/Logout';
import DynamicTable from '../../components/table/Dynamictable';
const Moderator = () => {
  const breadcrumbItems = [{ url: '/moderator', label: 'Moderators' }];
  const { isLoading, records, handleDelete } = useData('admin/moderators');

  // Define the columns for the table
  const columns = [
    { id: 'first_name', label: 'First Name', type: 'text' },
    { id: 'last_name', label: 'Last Name', type: 'text' },
    { id: 'email', label: 'Email', type: 'email' },
    // { id: 'password', label: 'password',type:'password' },
    { id: 'phone_number', label: 'Mobile', type: 'number' },
  ];
  return (
    <>
      <BreadCrumb back={'/'} place={breadcrumbItems} />

      {isLoading ? (
        <Loading />
      ) : (
        <DynamicTable
          columns={columns}
          data={records}
          onDelete={handleDelete}
          addPath={'./CreateModerator'}
          updatePath={`./UpdateModerator`}
        />
      )}
    </>
  );
};

export default Moderator;
