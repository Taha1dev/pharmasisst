import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const Settings = () => {
  const breadcrumbItems = [{ url: '/Settings', label: 'Settings' }];

  return (
    <>
      <BreadCrumb back={'/'} place={breadcrumbItems} />

      <div>Settings</div>
    </>
  );
};

export default Settings;
