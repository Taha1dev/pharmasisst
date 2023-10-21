import { useQuery, useMutation, useQueryClient } from 'react-query';
import axiosClient from '../lib/axiosClient';
import Swal from 'sweetalert2';
import { useCallback } from 'react';

const useData = (endpoint) => {
  const queryClient = useQueryClient();

  const fetchData = useCallback(async () => {
    const response = await axiosClient.get(endpoint);
    return response.data;
  }, [endpoint]); // Memoize the fetchData function

  const deleteData = useCallback(
    async (id) => {
      await axiosClient.delete(`${endpoint}/${id}`);
    },
    [endpoint]
  ); // Memoize the deleteData function

  const { data, isLoading } = useQuery(endpoint, fetchData, {
    keepPreviousData: true,
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
      title: 'Delete this record?',
      text: "This action cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Keep',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleting...',
          icon: 'info',
          showCancelButton: false,
          showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false
        });
  
        mutation.mutate(id, {
          onSuccess: () => {
            Swal.update({
              title: 'Deleted!',
              html: 'The record has been deleted.',
              icon: 'success',
              showCancelButton: false,
              showConfirmButton: false
            });
  
            setTimeout(() => {
              Swal.close();
            }, 1000);
          },
          onError: () => {
            Swal.fire('Error', 'An error occurred while deleting the record.', 'error');
          },
        });
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
