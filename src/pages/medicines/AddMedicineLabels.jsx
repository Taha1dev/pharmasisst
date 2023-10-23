import { useState, useEffect } from 'react';
import axiosClient from '../../lib/axiosClient';

export default function AddMedicineLabels() {
  const [medLabels, setMedLabels] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState('');
  const [labelDescription, setLabelDescription] = useState('');

  useEffect(() => {
    async function fetchMedLabels() {
      try {
        const response = await axiosClient.get('admin/medicineTypes');
        setMedLabels(response.data.data);
      } catch (error) {
        console.error('Error fetching medicine labels:', error);
      }
    }

    fetchMedLabels();
  }, []);

  const handleLabelChange = (event) => {
    setSelectedLabel(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setLabelDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    const getMedid = async () => {
      const response = axiosClient.get();
    };
    event.preventDefault();
    try {
      const dataToSend = {
        medicine_type_id: selectedLabel,
        content: labelDescription,
      };
      const response = await axiosClient.post(
        `/admin/medicineDetails/${id}`,
        dataToSend
      );
      console.log('Medicine details added successfully:', response.data);
    } catch (error) {
      console.error('Error adding medicine details:', error);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <form
        className="flex flex-col justify-between w-96"
        onSubmit={handleSubmit}
      >
        <select
          name="drugLabels"
          className="p-2 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={selectedLabel}
          onChange={handleLabelChange}
        >
          <option value="">Select a label</option>
          {medLabels.map((med) => (
            <option
              key={med.id}
              value={med.id}
              className="bg-gray-600 text-white"
            >
              {med.type}
            </option>
          ))}
        </select>
        <textarea
          name="description"
          className="p-2 rounded-md my-4 bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter label description"
          value={labelDescription}
          onChange={handleDescriptionChange}
        ></textarea>

        <button
          type="submit"
          className="p-2 mt-4 bg-blue-500 text-white rounded-md"
          disabled={!selectedLabel || !labelDescription}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
