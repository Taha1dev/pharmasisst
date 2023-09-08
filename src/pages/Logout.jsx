import React, { useEffect } from 'react';
import './styles/logout.css';
import Swal from 'sweetalert2';

const Logout = () => {
  useEffect(() => {
    const timeoutDuration = 1000;

    // Create a Promise that resolves when the user confirms or rejects the logout
    const confirmLogout = async () => {
      return new Promise((resolve) => {
        Swal.fire({
          title: 'Confirm Logout',
          text: 'Are you sure you want to log out?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes, Logout',
          cancelButtonText: 'Cancel',
          showLoaderOnConfirm: true, // Show a loading spinner on confirm button
        }).then((result) => {
          if (result.isConfirmed) {
            resolve(true); // User confirmed
          } else {
            resolve(false); // User canceled
          }
        });
      });
    };

    const performLogout = async () => {
      const shouldLogout = await confirmLogout();

      if (shouldLogout) {
        // User confirmed, proceed with logout
        logout();
        console.log('Token removed from local storage.');
        window.location.href = '/';
      } else {
        // User canceled, clear the timeout
        clearTimeout(timeoutId);
      }
    };

    const timeoutId = setTimeout(() => {
      // This will trigger if the user doesn't respond to the confirmation dialog
      performLogout();
    }, timeoutDuration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Remove the token from local storage
  const logout = () => {
    try {
      localStorage.removeItem('token');
      console.log('Token removed successfully.');
    } catch (error) {
      console.error('Error removing token:', error);
    }
  };

  return (
    <>
      <h2 className="text-center text-white mt-72 text-6xl">Logging out</h2>
      <div className="loader">
        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>
      </div>
    </>
  );
};

export default Logout;
