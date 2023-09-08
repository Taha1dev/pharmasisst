import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './table.css';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="pagination flex justify-center">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item rounded-lg ${
              currentPage === pageNumber ? 'bg-blue-500' : ''
            }`}
          >
            <button
              className={`page-link rounded-full w-8 h-8 ${
                currentPage === pageNumber ? 'text-white' : ''
              }`}
              onClick={() => paginate(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

function getNestedValue(obj, path) {
  const pathArray = path.split('.');
  return pathArray.reduce(
    (acc, key) => (acc && acc[key] !== 'undefined' ? acc[key] : ''),
    obj
  );
}

const ModeratorTable = ({
  columns,
  data,
  addPath,
  updatePath,
  handleSearch,
  value,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Set the number of items per page

  // Calculate the indexes of the items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="container  wrapper">
      <div className="flex justify-between items-center mb-4">
        <div className="w-4/5 flex items-center">
          {/* Search input field */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            onChange={handleSearch}
            value={value} // Update the search query
          />
          {/* Add a search button */}
        </div>
        <div className="w-1/5 flex items-center justify-end">
          {/* Add button */}
          <Link
            to={`${addPath}`}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Add
          </Link>
        </div>
      </div>
      <table className="min-w-full bg-white border-collapse border border-gray-300">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                className="py-2 px-4 bg-gray-100 border border-gray-300 text-gray-600 font-semibold"
              >
                {column.label}
              </th>
            ))}
            <th className="py-2 px-4 bg-gray-100 border border-gray-300 text-gray-600 font-semibold">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => {
                if (column.id === 'image') {
                  return (
                    <td
                      key={column.id}
                      className="py-2 px-4 border border-gray-300"
                    >
                      <img src={item.image} alt="image" width="50" />
                    </td>
                  );
                } else {
                  return (
                    <td
                      key={column.id}
                      className="py-2 px-4 border border-gray-300"
                    >
                      {getNestedValue(item, column.id)}
                    </td>
                  );
                }
              })}
              <td className="py-2 px-4 border border-gray-300">
                <Link
                  to={`${updatePath}/${item.id}`}
                  className="p-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
                >
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={columns.length + 1} className="border-t p-4">
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ModeratorTable;
