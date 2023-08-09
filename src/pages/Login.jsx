import { useEffect, useState } from 'react';

import './styles/Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  return (
    <section className={darkMode ? 'bg-gray-900' : 'bg-gray-50'}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className={`flex items-center mb-6 text-2xl font-semibold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          <img className="w-12 h-12 mr-2" src="/Logo.png" alt="logo" />
          Pharmassist
        </a>
        <div
          className={`w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ${
            darkMode ? 'dark:bg-gray-800 dark:border-gray-700' : ''
          }`}
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              className={`text-xl font-bold leading-tight tracking-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              } md:text-2xl`}
            >
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
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
          </div>
        </div>
      </div>
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </section>
  );
};

export default Login;
