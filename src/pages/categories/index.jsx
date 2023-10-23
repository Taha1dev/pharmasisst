import '../styles/Categories.css';
import CategoriesCard from '../../components/CategoriesCard';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import DynamicTable from '../../components/table/Dynamictable';
import useData from '../../HOOkS/useData';
import Loading from '../../components/logout/Logout';
import { useState } from 'react';
import { useEffect } from 'react';

const Categories = () => {
  const breadcrumbItems = [{ url: '/Categories', label: 'Categories' }];
  const { isLoading, records, handleDelete } = useData('admin/categories');

  const columns = [
    { id: 'name', label: 'Name' },
    { id: 'user.full_name', label: 'Added by' },
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
      <div className="grid-container">
        {records?.map((category, index) => (
          <CategoriesCard key={index} name={category.name} />
        ))}
      </div>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <h2 className="text-xl inline-block">Category List</h2>
            <DynamicTable
              columns={columns}
              data={filteredData} // Use the filteredData state here
              onDelete={handleDelete}
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

export default Categories;
