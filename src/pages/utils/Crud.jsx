import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axiosClient from '../../lib/axiosClient';

// Define the number of items to display per page.
const ITEMS_PER_PAGE = 10;

// Function to fetch categories data from the server.
const fetchCategories = async (page, searchQuery) => {
  const response = await axiosClient.get(
    `admin/categories?page=${page}&limit=${ITEMS_PER_PAGE}&search=${searchQuery}`
  );
  return response.data;
};

// Function to delete a category.
const deleteCategory = async (id) => {
  await axiosClient.delete(`${endpoint}/${id}`);
};

// Define the Crud component.
const Crud = () => {
  // Initialize the query client.
  const queryClient = useQueryClient();

  // State variables for current page and search query.
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Use a React Query to fetch categories data.
  const { data } = useQuery(
    // Provide a unique query key with current page and search query.
    ['categories', currentPage, searchQuery],
    // Fetch data using the fetchCategories function.
    () => fetchCategories(currentPage, searchQuery)
  );

  // Extract records and meta information from the data.
  const records = data?.data || [];
  const meta = data?.meta || {};

  // Use a React Query mutation for deleting a category.
  const mutation = useMutation(deleteCategory, {
    onMutate: (id) => {
      // Optimistically update data in the query cache.
      queryClient.setQueryData(
        ['categories', currentPage, searchQuery],
        (prevData) => {
          return prevData.data.filter((record) => record.id !== id);
        }
      );
    },
    onError: (error, variables, context) => {
      // Handle errors and revert changes if necessary.
      queryClient.setQueryData(
        ['categories', currentPage, searchQuery],
        context.prevData
      );
    },
    onSettled: () => {
      // Invalidate the query to refetch data after deletion.
      queryClient.invalidateQueries(['categories', currentPage, searchQuery]);
    },
  });

  // Calculate the total number of pages from meta information.
  const totalPages = meta?.last_page || 1;

  // Filter records based on the search query (client-side).
  const filteredRecords = searchQuery
    ? records.filter((record) =>
        record.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : records;

  // Function to handle category deletion.
  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure you want to delete');
    if (confirm) {
      mutation.mutate(id);
      alert('record has been deleted');
    }
  };

  // Render the component UI.
  return (
    <div className="container mt-5">
      <div className="flex justify-between items-center mb-4">
        <div className="w-4/5 flex items-center">
          {/* Search input field */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="w-1/5 flex items-center justify-end">
          {/* Add button */}
          <Link
            to="/crud/create"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Add
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto">
        {/* Table for displaying records */}
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr>
              {/* Table headers */}
              <th className="py-2 px-4 bg-gray-100 border border-gray-300 text-gray-600 font-semibold">
                ID
              </th>
              <th className="py-2 px-4 bg-gray-100 border border-gray-300 text-gray-600 font-semibold">
                Name
              </th>
              <th className="py-2 px-4 bg-gray-100 border border-gray-300 text-gray-600 font-semibold">
                Image
              </th>
              <th className="py-2 px-4 bg-gray-100 border border-gray-300 text-gray-600 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((item) => (
              <tr key={item.id}>
                {/* Table data cells */}
                <td className="py-2 px-4 border border-gray-300">{item.id}</td>
                <td className="py-2 px-4 border border-gray-300">
                  {item.name}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {item.Image}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* Update and Delete buttons */}
                  <Link
                    to={`/crud/edit/${item.id}`}
                    className="p-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        {totalPages > 1 && (
          <div className="flex space-x-2">
            {/* Pagination buttons */}
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`px-3 py-1 rounded-md ${
                currentPage === 1
                  ? 'bg-gray-300 text-gray-600'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-md ${
                  i + 1 === currentPage
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-600 hover:bg-blue-200'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className={`px-3 py-1 rounded-md ${
                currentPage === totalPages
                  ? 'bg-gray-300 text-gray-600'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Crud;
