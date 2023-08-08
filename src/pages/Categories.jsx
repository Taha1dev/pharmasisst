import React from 'react';
import './styles/Categories.css';
import CategoriesCard from '../components/CategoriesCard';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';

const Categories = () => {
  const breadcrumbItems = [{ url: '/Categories', label: 'Categories' }];
  return (
    <>
      <BreadCrumb place={breadcrumbItems} />
      <div className="grid-container">
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
      </div>
    </>
  );
};

export default Categories;
