import React from 'react';
import './css/SideBar.css';
const SideBar = () => {
  return (
    <>
      <aside className="w-40 bg-gray-200">
        <div className="flex items-center justify-center py-4">
          <img className="h-20" src="/Logo.png" alt="Logo" />
        </div>
        <nav className="flex flex-col flex-1">
          <a className="px-4 py-3 text-gray-700 hover:bg-gray-300" href="#">
            Dashboard
          </a>
          <a className="px-4 py-3 text-gray-700 hover:bg-gray-300" href="#">
            Categories
          </a>
          <a className="px-4 py-3 text-gray-700 hover:bg-gray-300" href="#">
            Companies
          </a>
          <a className="px-4 py-3 text-gray-700 hover:bg-gray-300" href="#">
            Medicines
          </a>
          <a className="px-4 py-3 text-gray-700 hover:bg-gray-300" href="#">
            Medicine Type
          </a>
          <a className="px-4 py-3 text-gray-700 hover:bg-gray-300" href="#">
            Sub Admins
          </a>
          <a className="px-4 py-3 text-gray-700 hover:bg-gray-300" href="#">
            Settings
          </a>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
