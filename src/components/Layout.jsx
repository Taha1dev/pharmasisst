import React from 'react';
import { VscTypeHierarchySub } from 'react-icons/vsc';
import { MdAdminPanelSettings } from 'react-icons/md';
import { IoMedkitOutline } from 'react-icons/io5';
import {
  RiDashboardLine,
  RiAdminLine,
  RiMedicineBottleLine,
  RiSettings2Line,
} from 'react-icons/ri';
const Layout = ({ children }) => {
  const links = [
    {
      text: 'Dashboard',
      href: '#',
      icon: <RiDashboardLine size={25} />,
    },
    {
      text: 'Categories',
      href: '#',
      icon: <IoMedkitOutline size={25} />,
    },
    {
      text: 'Companies',
      href: '#',
      icon: <RiAdminLine size={25} />,
    },
    {
      text: 'Medicines',
      href: '#',
      icon: <RiMedicineBottleLine size={25} />,
    },
    {
      text: 'Medicine Type',
      href: '#',
      icon: <VscTypeHierarchySub size={25} />,
    },
    {
      text: 'Sub Admins',
      href: '#',
      icon: <RiAdminLine size={25} />,
    },
    {
      text: 'Settings',
      href: '#',
      icon: <RiSettings2Line size={25} />,
    },
  ];
  return (
    <>
      {/* <NavBar  /> */}
      <div className="flex h-screen">
        <aside className="w-56 bg-gray-200">
          <div className="flex justify-around items-center px-2 py-5 text-zinc-800">
            <MdAdminPanelSettings size={30} />
            <div>
              <h1 className="text-xl font-medium">Admin Panel</h1>
            </div>
          </div>
          <hr className="red-hr" />
          <div className="flex items-center justify-center py-4">
            <img className="h-24 " src="/Logo.png" alt="Logo" />
          </div>
          <nav className="flex flex-col flex-1">
            {links.map((link, index) => (
              <a
                key={index}
                className="px-6 py-3 text-gray-700 bg-gray-200 flex items-center transition duration-300 hover:text-white hover:bg-teal-500 hover:shadow-lg hover:rounded-md"
                href={link.href}
              >
                <span className="mr-3">{link.icon}</span>
                <span>{link.text}</span>
              </a>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-10">{children}</main>
      </div>
    </>
  );
};

export default Layout;
