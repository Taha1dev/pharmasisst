import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';

const Home = () => {
  const breadcrumbItems = [];

  return (
    <>
      <BreadCrumb place={breadcrumbItems} />
      <div className="container mx-auto my-auto h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5">
          <div className="h-40 rounded-2xl bg-gray-400"></div>
          <div className="h-40 rounded-2xl bg-gray-400"></div>
          <div className="h-40 rounded-2xl bg-gray-400"></div>
          <div className="h-40 rounded-2xl bg-gray-400"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5">
          <div className="h-80 col-span-3 rounded-2xl bg-gray-400"></div>
          <div className="h-80 col-span-1 rounded-2xl bg-gray-400"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5">
          <div className="h-72 col-span-2 rounded-2xl bg-gray-400"></div>
          <div className="h-72 col-span-2 rounded-2xl bg-gray-400"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
