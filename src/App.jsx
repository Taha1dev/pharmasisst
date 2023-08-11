import Layout from './components/Layout';
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
//Pages
import Home from './pages/Home';
import Categories from './pages/Categories';
import Medicines from './pages/Medicines';
import MedicineType from './pages/MedicineType';
import SubAdmins from './pages/SubAdmins';
import Companies from './pages/Companies';
import Settings from './pages/Settings';
import Login from './pages/Login';
import NotFound from './NotFound';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="companies" element={<Companies />} />
          <Route path="medicines" element={<Medicines />} />
          <Route path="MedicineType" element={<MedicineType />} />
          <Route path="SubAdmins" element={<SubAdmins />} />
          <Route path="Settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
