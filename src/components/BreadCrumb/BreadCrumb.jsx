import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import { HiOutlineHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ place }) => {
  return (
    <nav className="flex mb-2" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 ">
        <li className="inline-flex items-center">
          <Link
            to="/Home"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:underline hover:text-cyan-600"
          >
            <HiOutlineHome />
            Home
          </Link>
        </li>
        {Array.isArray(place) &&
          place.map((item, index) => {
            return (
              <li key={index}>
                <div className="flex items-center hover:text-cyan-600">
                  <FiChevronsRight className="w-3 h-3 text-gray-500 mx-1" />
                  <Link
                    to={item.url}
                    className="ml-1 text-sm font-medium text-gray-700 hover:underline hover:text-cyan-600 "
                  >
                    {item.label}
                  </Link>
                </div>
              </li>
            );
          })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
