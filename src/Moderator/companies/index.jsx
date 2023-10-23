import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import { Link } from 'react-router-dom';
import useData from '../../HOOkS/useData';
import Loading from '../../components/logout/Logout';
import ModeratorTable from '../../components/table/ModeratorTable';
import { useEffect } from 'react';
import { useState } from 'react';

const ModeratorCompany = () => {
  const breadcrumbItems = [{ url: '/Moderator/companies', label: 'Companies' }];
  const { isLoading, records } = useData('moderator/companies');

  // Define the columns for the table
  const columns = [
    { id: 'name', label: 'Name' },
    { id: 'image', label: 'Image' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(records);

  useEffect(() => {
    setFilteredData(records);
  }, [records]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    // Perform the search logic here and update the filteredData state
    const results = performSearch(searchTerm);
    setFilteredData(results);
  };

  const performSearch = (searchTerm) => {
    const filteredResults = records.filter((record) =>
      record.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredResults;
  };
  return (
    <>
      <BreadCrumb back={'/Moderator'} place={breadcrumbItems} />

      <h2 className="text-2xl">Companies List</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <ModeratorTable
          columns={columns}
          data={filteredData} // Use the filteredData state here
          handleSearch={handleSearch}
          value={searchTerm}
          addPath={'./CreateCompany'}
          updatePath={`./updateCompany`}
        />
      )}
    </>
  );
};

export default ModeratorCompany;
