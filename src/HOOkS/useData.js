import { useQuery, useMutation, useQueryClient } from 'react-query';
import axiosClient from '../lib/axiosClient';
import Swal from 'sweetalert2';
import { useCallback } from 'react';

const useData = (endpoint) => {
  const queryClient = useQueryClient();

  const fetchData = useCallback(async () => {
    const response = await axiosClient.get(endpoint);
    return response.data;
  });

  const deleteData = async (id) => {
    await axiosClient.delete(`${endpoint}/${id}`);
  };

  const { data, isLoading } = useQuery(endpoint, fetchData, {
    keepPreviousData: true,
    staleTime: 10000,
  });

  const mutation = useMutation(deleteData, {
    onMutate: (id) => {
      queryClient.setQueryData(endpoint, (prevData) => {
        return prevData.data.filter((record) => record.id !== id);
      });
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData(endpoint, context.prevData);
    },
    onSettled: () => {
      queryClient.invalidateQueries(endpoint);
    },
  });

  const records = data?.data || [];

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate(id);
        Swal.fire('Deleted!', 'The record has been deleted.', 'success');
      }
    });
  };

  return {
    isLoading,
    records,
    handleDelete,
  };
};

export default useData;
