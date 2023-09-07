import React from "react";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";

const ModeratorHome = () => {
  return <div>
    <BreadCrumb back={'/Moderator'}  />
    <h1 className="text-2xl">Welcome to the moderator dashboard</h1><br/>
  </div>;
};

export default ModeratorHome;
