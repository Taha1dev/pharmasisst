import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import useData from '../../HOOkS/useData';
import Loading from '../../components/logout/Logout';
import ModeratorTable from '../../components/table/ModeratorTable';
import { useEffect } from 'react';
import { useState } from 'react';

const ModeratorMedicines = () => {
  const breadcrumbItems = [{ url: '/Moderator/Medicines', label: 'Medicines' }];
  const { isLoading, records } = useData('moderator/medicines');

  const columns = [
    { id: 'name', label: 'Name' },
    { id: 'category.name', label: 'Category' }, // Access nested property
    { id: 'company.name', label: 'Company' }, // Access nested property
    { id: 'Image', label: 'Medicie Image' }, // Access nested property
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
      <h2 className=" my-8 text-2xl">Medicines</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ModeratorTable
            columns={columns}
            data={filteredData} // Use the filteredData state here
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

export default ModeratorMedicines;
