import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Loading from '../../components/logout/Logout';
import useData from '../../HOOkS/useData';
import DynamicTable from '../../components/table/Dynamictable';
import { useState } from 'react';
import { useEffect } from 'react';

const MedicineType = () => {
  const { isLoading, records, handleDelete } = useData('admin/medicineTypes');
  const columns = [{ id: 'type', label: 'Label' }];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(records);

  useEffect(() => {
    setFilteredData(records);
  }, [records]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    // Perform the search logic here and update the searchResults state
    const results = performSearch(searchTerm);
    setSearchTerm(searchTerm);
  };

  const performSearch = (searchTerm) => {
    const filteredResults = records.filter((record) =>
      record.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filteredResults); // Update the filteredData state with the search results
    return filteredResults;
  };
  const breadcrumbItems = [
    { url: '/medicines/MedicineType', label: 'Drug Labels' },
  ];
  return (
    <>
      <BreadCrumb back={'/'} place={breadcrumbItems} />

      <h2 className="text-2xl">Drug Labels</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <DynamicTable
          columns={columns}
          data={filteredData} // Use the filteredData state here
          onDelete={handleDelete}
          addPath="../medicines/createmedtype"
          updatePath="../medicines/updatemedtype"
          handleSearch={handleSearch}
          value={searchTerm}
        />
      )}
    </>
  );
};

export default MedicineType;
