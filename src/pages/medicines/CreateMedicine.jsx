import React, { useState, useEffect, useRef } from 'react';
import axiosClient from '../../lib/axiosClient';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const CreateMedicine = () => {
  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);
  const nameRef = useRef(null);
  const imageRef = useRef(null);
  const categoryNameRef = useRef(null);
  const companyNameRef = useRef(null);

  // Fetch category and company data when the component mounts
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axiosClient.get('/admin/categories');
        if (Array.isArray(response.data.data)) {
          setCategories(response.data.data);
        } else {
          console.error('Response data is not an array:', response.data.data);
        }
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };

    const fetchCompanyData = async () => {
      try {
        const response = await axiosClient.get('/admin/companies');
        if (Array.isArray(response.data.data)) {
          setCompanies(response.data.data);
        } else {
          console.error('Response data is not an array:', response.data.data);
        }
      } catch (error) {
        console.error('Error fetching company data:', error);
      }
    };

    fetchCategoryData();
    fetchCompanyData();
  }, []);

  const handleAddMedicine = async () => {
    try {
      // Get the values from the refs
      const name = nameRef.current.value;
      const image = imageRef.current.value;
      const categoryId = categoryNameRef.current.value;
      const companyId = companyNameRef.current.value;

      // Prepare the data object to send in the POST request
      const dataToSend = {
        name,
        image,
        category_id: categoryId, // Assuming your API expects category_id and company_id
        company_id: companyId,
      };

      // Send the POST request to your API endpoint
      const response = await axiosClient.post('/admin/medicines', dataToSend);

      // Handle success (e.g., show a success message or redirect)
      console.log('Medicine added successfully:', response.data);

      // You can reset the form or handle navigation as needed
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Error adding medicine:', error);
    }
  };
  const handleSubmit = (e) => {
    handleAddMedicine();
    e.preventDefault();
  };
  const breadcrumbItems = [
    { url: '/medicines', label: 'Medicines' },
    { url: '/medicines/createmedicine', label: 'Create Medicine' },
  ];
  return (
    <>
      <BreadCrumb back={'/'} place={breadcrumbItems} />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-semibold mb-4">Create Medicine</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              ref={nameRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image
            </label>
            <input
              type="text"
              ref={imageRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Category Name
            </label>
            <select
              ref={categoryNameRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Company Name
            </label>
            <select
              ref={companyNameRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select Company</option>
              {companies.map((company) => (
                <option key={company.id} value={company.id}>
                  {company.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Medicine
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateMedicine;
