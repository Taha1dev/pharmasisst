import React from 'react';

const Loading = () => {
  return (
    <>
      <h2 className="text-center text-white mt-72 text-6xl">Logging out</h2>
      <div className="loader">
        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>
      </div>
    </>
  );
};

export default Loading;
