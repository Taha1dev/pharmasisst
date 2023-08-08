import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
const SubAdmins = () => {
  const [darkMode, setDarkMode] = useState(false);
  const breadcrumbItems = [{ url: '/SubAdmins', label: 'Moderators' }];

  return (
    <>
      <BreadCrumb place={breadcrumbItems} />
      <div className="flex flex-col items-center mx-auto justify-center w-full max-w-lg">
        <h1 className="text-4xl w-full underline capitalize font-bold text-gray-900">
          Add new moderator
        </h1>
        <form className="space-y-4 md:space-y-6 w-full">
          <div>
            <label
              htmlFor="email"
              className={`block mb-2 text-sm font-medium ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                darkMode
                  ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  : ''
              }`}
              placeholder="name@pharmassist.com"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className={`block mb-2 text-sm font-medium ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                darkMode
                  ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  : ''
              }`}
              required=""
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start"></div>
          </div>
          <Link
            to={'/Home'}
            type="submit"
            className={`w-full text-white ${
              darkMode
                ? 'bg-gray-50 textCustom dark:bg-primary-600'
                : 'bgCustom hover:bg-primary-700 dark:hover:bg-primary-700'
            } focus:ring-4 focus:outline-none ${
              darkMode ? 'focus:ring-primary-800' : 'focus:ring-primary-300'
            } font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
          >
            Sign in
          </Link>
        </form>
      </div>{' '}
    </>
  );
};

export default SubAdmins;
