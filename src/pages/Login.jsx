import React, { useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axiosClient from '../lib/axiosClient';
import { Link, useNavigate } from 'react-router-dom';
import './styles/login.css';
import Swal from 'sweetalert2';
import Loading from '../components/logout/Logout';
const Login = () => {
  const [userType, setUserType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const emailRef = useRef('');
  const passwordRef = useRef('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      if (userType === 'Moderator') {
        navigate('/Moderator');
      } else {
        navigate('/Moderator');
      }
    }
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    // Input validation
    if (!emailValue || !passwordValue) {
      setError('Please enter both email and password.');
      return;
    }

    setIsLoading(true);
    setError('');
    if (isLoading) {
      <Loading />;
    }
    try {
      let response;
      if (userType === 'Moderator') {
        response = await axiosClient.post('moderator/login', {
          email: emailValue,
          password: passwordValue,
        });
      } else {
        response = await axiosClient.post('admin/login', {
          email: emailValue,
          password: passwordValue,
        });
      }

      const token = response.data.token;
      if (token) {
        localStorage.setItem('token', token);
        if (userType === 'Moderator') {
          navigate('/Moderator');
        } else {
          navigate('/home');
        }
      }
    } catch (error) {
      console.log(error);
      Swal.fire(
        'Error',
        'Login failed. Please check your credentials.',
        'error'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          className={`flex text-white items-center mb-6 text-2xl font-semibold 'text-gray-900`}
        >
          <img className="w-12 h-12 mr-2" src="/Logo.png" alt="logo" />
          Pharmassist
        </a>
        <div
          className={`w-full bg-white rounded-lg shadow border-transparent md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-transparent`}
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex flex-col items-center">
              <h2 className="my-1 text-white text-2xl">
                Choose Your Role Please
              </h2>
              <div className="relative inline-block w-40">
                <select
                  className="block cursor-pointer appearance-none w-40 bg-gray-50 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={userType} // Set value to userType
                  onChange={(e) => setUserType(e.target.value)} // Handle onChange to update userType
                >
                  <option value="" disabled>
                    Choose Your Role
                  </option>
                  <option value="Admin" className="text-black">
                    Admin
                  </option>
                  <option value="Moderator" className="text-black">
                    Moderator
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12l-6-6h12l-6 6z" />
                  </svg>
                </div>
              </div>
            </div>
            <h1
              className={`text-xl text-white text-center font-bold leading-tight tracking-tight md:text-2xl`}
            >
              Sign in to your account
            </h1>
            <form onSubmit={handleLogin} className="space-y-4 md:space-y-6 ">
              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 text-sm font-medium text-white `}
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  id="email"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                `}
                  placeholder="name@pharmassist.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className={`block text-white mb-2 text-sm font-medium 'text-white'
                `}
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  ref={passwordRef}
                  id="password"
                  placeholder="••••••••"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                `}
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start"></div>
              </div>
              <button
                type="submit"
                className={`w-full text-center bgCustom text-white focus:ring-4 focus:outline-none  hover:bg-primary-700 dark:hover:bg-primary-700 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'`}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
