import axiosClient from '../../lib/axiosClient';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// eslint-disable-next-line react/prop-types
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
        .then(() => {
          Swal.fire({
            title: 'Data Added Successfully',
            icon: 'success',
            confirmButtonText: 'Close',
          }).then(() => {
            // Redirect to the desired URL after a timeout
            setTimeout(() => {
              navigate(redirectPath);
            }, 500);
          });
        });
    } catch (err) {
      err.map((erorr) => {
        console.error(erorr.errors);
        console.error(erorr.messgae);
      });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleAdd}
        className="max-w-md mx-auto p-4 bg-white  shadow-xl rounded-lg"
      >
        {fields?.map((field, index) => (
          <div key={index} className="mb-4">
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
