import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import { Link } from 'react-router-dom';

const ModeratorCompany = () => {
  const breadcrumbItems = [{ url: '/Moderator/companies', label: 'Companies' }];

  return (
    <div>
      <BreadCrumb back={'/Moderator'} place={breadcrumbItems} />
      <Link to="createcompany">create</Link>
      <br />
      <Link to="updatecompany/1">update</Link>
    </div>
  );
};

export default ModeratorCompany;
