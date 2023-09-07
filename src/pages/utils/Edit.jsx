import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosClient from '../../lib/axiosClient';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import Loading from '../../components/logout/Logout';

const Edit = ({ fields, endpoint, redirectPath }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({});

  const {
    data: initialValues,
    isLoading,
    isError,
  } = useQuery(
    'fetchCategoriesData',
    () =>
      axiosClient
        .get(`/${endpoint}/${id}`)
        .then((response) => response.data.data),
    {
      onError: (error) => {
        console.error('Error fetching data:', error);
      },
    }
  );

  useEffect(() => {
    if (initialValues) {
      setInputValues(initialValues);
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.post(`/${endpoint}/${id}`, inputValues);
      // Show success message and navigate
      Swal.fire({
        title: 'Data Updated Successfully',
        icon: 'success',
        confirmButtonText: 'Close',
      }).then(() => {
        setTimeout(() => {
          navigate(redirectPath);
        }, 500);
      });
    } catch (error) {
      try {
        await axiosClient.put(`/${endpoint}/${id}`, inputValues);
        // Show success message and navigate
        Swal.fire({
          title: 'Data Updated Successfully',
          icon: 'success',
          confirmButtonText: 'Close',
        }).then(() => {
          setTimeout(() => {
            navigate(redirectPath);
          }, 500);
        });
      } catch (error) {
        console.error('Error updating data:', error);
      }
    }
  };

  if (isLoading || isError) {
    return <Loading />;
  }

  return (
    <div className="container mt-5">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
      >
        {fields?.map((field, index) => (
          <div key={index} className="mb-4">
            <label htmlFor={field.name} className="block text-gray-700">
              {field.label}
            </label>
            <input
              name={field.name}
              type={field.type}
              defaultValue={inputValues[field.name] || ''}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 mt-2 w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
