import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Loading from '../../components/logout/Logout';
import { useState } from 'react';
import { useEffect } from 'react';
import ModeratorTable from '../../components/table/ModeratorTable';
import useData from '../../HOOkS/useData';
const ModeratorCategory = () => {
  const breadcrumbItems = [{ url: '/Categories', label: 'Categories' }];
  const { isLoading, records, handleDelete } = useData('moderator/categories');

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
      <BreadCrumb back={'/'} place={breadcrumbItems} />
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <h2 className="text-xl inline-block">Category List</h2>
            <ModeratorTable
              columns={columns}
              data={filteredData} // Use the filteredData state here
              handleSearch={handleSearch}
              value={searchTerm}
              addPath="./CreateCategory"
              updatePath="./updatecategory"
            />
          </>
        )}
      </div>
      {/* </div> */}
    </>
  );
};

export default ModeratorCategory;
