import { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
const Home = () => {
  const breadcrumbItems = [];
  const UserData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <BreadCrumb back={'/'} place={breadcrumbItems} />

      <div className="container mx-auto my-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5">
          <div className="h-40 rounded-2xl bg-gray-200">
            <Bar data={userData} />
          </div>
          <div className="h-40 rounded-2xl bg-gray-200">
            <Line data={userData} />
          </div>
          <div className="h-40 rounded-2xl bg-gray-200">
            <Bar data={userData} />
          </div>
          <div className="h-40 rounded-2xl bg-gray-200">
            <Line data={userData} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5">
          <div className="h-80 col-span-3 rounded-2xl bg-gray-200">
            <Bar style={{ width: '100%' }} data={userData} />
          </div>
          <div className="h-80 col-span-1 rounded-2xl bg-gray-200">
            <Pie data={userData} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5">
          <div className="h-72 col-span-2 rounded-2xl bg-gray-200">
            <Line data={userData} />
          </div>
          <div className="h-72 col-span-2 rounded-2xl bg-gray-200">
            <Line data={userData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
