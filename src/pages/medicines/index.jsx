import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import DynamicTable from '../../components/table/Dynamictable';
import useData from '../../HOOkS/useData';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../../components/logout/Logout';

const Medicines = () => {
  const breadcrumbItems = [{ url: '/Medicines', label: 'Medicines' }];
  const { isLoading, records, handleDelete } = useData('admin/medicines');

  const columns = [
    { id: 'name', label: 'Name' },
    { id: 'category.name', label: 'Category' }, // Access nested property
    { id: 'company.name', label: 'Company' }, // Access nested property
    { id: 'Image', label: 'Medicie Image' }, // Access nested property
    { id: 'user.full_name', label: 'Added By' }, // Access nested property
  ];

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

  return (
    <>
      <BreadCrumb back={'/'} place={breadcrumbItems} />
      <h2 className="text-2xl">Medicines</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h2 className="text-xl inline-block">Medicines list</h2>
          <DynamicTable
            columns={columns}
            data={filteredData} // Use the filteredData state here
            onDelete={handleDelete}
            addPath="./CreateMedicine"
            updatePath="./updateMedicine"
            handleSearch={handleSearch}
            value={searchTerm}
          />
        </>
      )}
      {/* </div> */}
    </>
  );
};

export default Medicines;
