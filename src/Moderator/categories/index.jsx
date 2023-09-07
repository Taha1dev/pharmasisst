import React from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import { Link } from 'react-router-dom';

const ModeratorCategory = () => {
  const breadcrumbItems = [{ url: '', label: 'Categories' }];
  return (
    <div>
      <BreadCrumb back={'/Moderator'} place={breadcrumbItems} />
      <Link to='createcategory'>create</Link>
      <br />
      <Link to='updatecategory/1'>update</Link>
    </div>
  );
};

export default ModeratorCategory;
