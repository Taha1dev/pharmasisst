import React, { useRef } from 'react';
import axiosClient from '../../lib/axiosClient';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Create = ({ fields, endpoint, redirectPath }) => {
  const navigate = useNavigate();
  const inputRefs = {};

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const formData = {};

      for (const field of fields) {
        formData[field.name] = inputRefs[field.name].value;
      }
      axiosClient
        .post(`/${endpoint}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          Swal.fire({
            title: 'Data Added Successfully',
            icon: 'success',
            confirmButtonText: 'Close',
          }).then(() => {
            // Generate a unique identifier (e.g., timestamp)
            const timestamp = Date.now();
            const redirectURL = `${redirectPath}?timestamp=${timestamp}`;

            // Redirect to the unique URL
            navigate(redirectURL);
          });
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleAdd}
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
      >
        {fields?.map((field) => (
          <div key={field.name} className="mb-4">
            <label htmlFor={field.name} className="block text-gray-700">
              {field.label}
            </label>
            <input
              ref={(ref) => (inputRefs[field.name] = ref)}
              name={field.name}
              type={field.type}
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

export default Create;
