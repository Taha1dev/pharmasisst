import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosClient from '../../lib/axiosClient';
import Swal from 'sweetalert2';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const UpdateMedType = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [type, setType] = useState('');

  useEffect(() => {
    const fetchMedType = async () => {
      try {
        const response = await axiosClient.get(`/admin/medicineTypes/${id}`);
        const { type } = response.data.data;
        setType(type);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMedType();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        type: type,
      };
      console.log(formData);
      await axiosClient.put(`/admin/medicineTypes/${id}`, formData);
      console.log('Medicine updated successfully:', response.data);

      // Show success message and navigate
      Swal.fire({
        title: 'Data Updated Successfully',
        icon: 'success',
        confirmButtonText: 'Close',
      }).then(() => {
        navigate('/medicineType');
      });
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const breadcrumbItems = [
    { url: '/medicines/medicinetype', label: 'Drug Labels' },
    { url: '/medicines/updatemedtype', label: 'Update Drug Label' },
  ];
  return (
    <>
      <BreadCrumb back={'/'} place={breadcrumbItems} />
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-md p-4 shadow-lg rounded-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="infoName"
              className="block text-gray-700 font-bold mb-2"
            >
              Info Name
            </label>
            <input
              type="text"
              id="type"
              value={type}
              onChange={handleTypeChange}
              className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateMedType;
