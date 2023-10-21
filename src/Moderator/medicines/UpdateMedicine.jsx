import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router';
import Loading from '../../components/logout/Logout';
import axiosClient from '../../lib/axiosClient';
import Swal from 'sweetalert2';

const MUpdateMedicine = () => {
  const navigate = useNavigate();
  const breadcrumbItems = [
    { url: '/moderator/Medicines', label: 'Medicines' },
    { url: '/moderator/Medicines', label: 'Update Medicine' },
  ];
  const { id } = useParams();
  const [medicine, setMedicine] = useState(null);
  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);
  const nameRef = useRef(null);
  const imageRef = useRef(null);
  const categoryNameRef = useRef(null);
  const companyNameRef = useRef(null);

  useEffect(() => {
    const fetchMedicine = async () => {
      try {
        const response = await axiosClient.get(`/moderator/medicines/${id}`);
        setMedicine(response.data.data);
      } catch (error) {
        console.error('Error fetching medicine:', error);
      }
    };

    const fetchCategoryData = async () => {
      try {
        const response = await axiosClient.get('/moderator/categories');
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
        const response = await axiosClient.get('/moderator/companies');
        if (Array.isArray(response.data.data)) {
          setCompanies(response.data.data);
        } else {
          console.error('Response data is not an array:', response.data.data);
        }
      } catch (error) {
        console.error('Error fetching company data:', error);
      }
    };

    fetchMedicine();
    fetchCategoryData();
    fetchCompanyData();
  }, [id]);

  const handleUpdateMedicine = async () => {
    try {
      const name = nameRef.current.value;
      const image = imageRef.current.value;
      const categoryId = categoryNameRef.current.value;
      const companyId = companyNameRef.current.value;

      const dataToUpdate = {
        ...medicine,
        name,
        image,
        category_id: categoryId,
        company_id: companyId,
      };

      const response = await axiosClient.post(
        `/moderator/medicines/${id}`,
        dataToUpdate
      );
      Swal.fire({
        icon: 'success',
        title: 'Data Updated Successfuly',
        text: '',
      }).then(() => {
        navigate('../medicines');
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'an Error happend',
        text: error.response.data,
      });
    }
  };

  const handleSubmit = (e) => {
    handleUpdateMedicine();
    e.preventDefault();
  };

  if (!medicine) {
    return <Loading />;
  }

  const { name, image, category_id, company_id } = medicine;
  return (
    <>
      {' '}
      <BreadCrumb back={'/'} place={breadcrumbItems} />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-semibold mb-4">Edit Medicine</h1>
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
              defaultValue={name}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image
            </label>
            <input
              type="file"
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
              defaultValue={category_id}
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
              defaultValue={company_id}
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Medicine
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MUpdateMedicine;
