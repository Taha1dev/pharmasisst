import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import DynamicTable from '../../components/table/Dynamictable';
import Loading from '../../components/logout/Logout';
import useData from '../../HOOkS/useData';
import { useState } from 'react';
import { useEffect } from 'react';

const Companies = () => {
  const breadcrumbItems = [{ url: '/Companies', label: 'Companies' }];
  const { isLoading, records, handleDelete } = useData('admin/companies');

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
      <BreadCrumb place={breadcrumbItems} />
      <h2>Companies List</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <DynamicTable
              columns={columns}
              data={filteredData} // Use the filteredData state here
              onDelete={handleDelete}
              handleSearch={handleSearch}
              value={searchTerm}
          addPath={'./CreateCompany'}
          updatePath={`./updateCompany`}
        />
      )}
    </>
  );
};

export default Companies;
