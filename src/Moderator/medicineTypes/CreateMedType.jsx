import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const MUpdateMedicine = () => {
  const breadcrumbItems = [
    { url: '/moderator/medicinetypes', label: 'Drug Label' },
    { url: '', label: 'Create Drug Lable' },
  ];
  return (
    <div>
      <BreadCrumb back={'/Moderator'} place={breadcrumbItems} />
      <h1 className="text-2xl">Create Drug Label</h1>
    </div>
  );
};

export default MUpdateMedicine;
