import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center bg-gray-900 text-white h-screen">
      <img className="mx-5 logo" src="/Logo.png" width={'200'} alt="Logo" />
      <div className="flex hover justify-evenly flex-col">
        <h1 className="font-extrabold text-6xl my-5">Page not found</h1>
        <p className="text-gray-300">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link to={'home'} className="underline my-3 text-lg">
          back to home?
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
