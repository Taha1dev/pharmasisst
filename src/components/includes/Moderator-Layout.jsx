import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { VscTypeHierarchySub } from 'react-icons/vsc';
import { MdAdminPanelSettings } from 'react-icons/md';
import { IoMedkitOutline, IoToggleOutline } from 'react-icons/io5';
import {
  RiDashboardLine,
  RiAdminLine,
  RiMedicineBottleLine,
  RiLogoutCircleLine,
} from 'react-icons/ri';
import '../css/Layout.css';
import { Outlet } from 'react-router-dom';

const links = [
  {
    id: 1,
    text: 'Dashboard',
    to: '/Moderator',
    icon: <RiDashboardLine size={25} />,
  },
  {
    id: 2,
    text: 'Categories',
    to: 'categories',
    icon: <IoMedkitOutline size={25} />,
  },
  {
    id: 3,
    text: 'Companies',
    to: 'companies',
    icon: <RiAdminLine size={25} />,
  },
  {
    id: 4,
    text: 'Medicines',
    to: 'medicines',
    icon: <RiMedicineBottleLine size={25} />,
  },
  {
    id: 5,
    text: 'Drug Info',
    to: 'medicinetypes',
    icon: <VscTypeHierarchySub size={25} />,
  },
  {
    id: 8,
    text: 'Logout',
    to: '/Logout',
    icon: <RiLogoutCircleLine size={25} />,
  },
];

const ModeratorLayout = () => {
  //   const router = useNavigate()

  //   const token = localStorage.getItem('token')
  // useEffect(()=>{
  //   if (!token) {
  //     router('/')
  //   }
  // })
  return (
    <>
      <div className="flex h-screen">
        <aside className="w-56 bg-gray-200">
          <div className="h-full flex flex-col">
            <div className="title flex justify-around items-center px-2 py-5 text-zinc-800">
              <MdAdminPanelSettings size={30} />
              <div>
                <h1 className="text-xl font-medium">Moderator Panel</h1>
              </div>
            </div>

            <div className="image flex items-center justify-center py-4">
              <img className="h-24" src="/Logo.png" alt="Logo" />
            </div>

            <nav className="flex flex-col flex-1 overflow-y-auto">
              {links.map((link) => (
                <Link
                  key={link.id}
                  to={link.to}
                  className="px-6 py-3 text-gray-700 bg-gray-200 flex items-center transition duration-300 hover:text-white hover:shadow-lg hover:rounded-md"
                >
                  <span className="mr-3">{link.icon}</span>
                  <span>{link.text}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1 p-10 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default ModeratorLayout;
