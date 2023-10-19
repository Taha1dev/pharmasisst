import './App.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
//Pages
import Home from './pages/Home';

import Login from './pages/Login';
import NotFound from './NotFound';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import Crud from './pages/utils/Crud';
import Logout from './pages/Logout';
import Edit from './pages/utils/Edit';
import Create from './pages/utils/Create';

import Companies from './pages/companies/';
import CreateCompany from './pages/companies/CreateCompany';
import UpdateCompany from './pages/companies/UpdateCompany';

import Medicines from './pages/medicines/';
import MedicineType from './pages/medicines/MedicineType';
import Categories from './pages/categories/';
import CreateCategory from './pages/categories/CreateCategory';
import UpdateCategory from './pages/categories/UpdateCategory';

import CreateMedicine from './pages/medicines/CreateMedicine';
import UpdateMedicine from './pages/medicines/UpdateMedicine';
import Moderator from './pages/moderator';
import Settings from './pages/settings/Settings';
import Layout from './components/includes/Layout';
import CreateModerator from './pages/moderator/CreateModerator';
import UpdateModerator from './pages/moderator/UpdateModerator';
import CreateMedType from './pages/medicines/CreateMedType';
import UpdateMedType from './pages/medicines/UpdateMedType';
import ModeratorLayout from './components/includes/Moderator-Layout';
import ModeratorCompany from './Moderator/companies';
import MCreateCompany from './Moderator/companies/CreateCompany';
import MUpdateCompany from './Moderator/companies/UpdateCompany';
import ModeratorCategory from './Moderator/categories';
import ModeratorMedicines from './Moderator/medicines';
import MCreateMedicine from './Moderator/medicines/CreateMedicine';
import MUpdateMedicine from './Moderator/medicines/UpdateMedicine';
import ModeratorHome from './Moderator';
import MmedicineTypes from './Moderator/medicineTypes';
import MCreateMedType from './Moderator/medicineTypes/CreateMedType';
import MUpdateMedType from './Moderator/medicineTypes/UpdateMedType';
import MCreateCategory from './Moderator/categories/CreateCategory';
import MUpdateCategory from './Moderator/categories/UpdateCategory';
import AddMedicineLabels from './pages/medicines/AddMedicineLabels';

const App = () => {
  const queryClient = new QueryClient();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* Home Page Routes */}
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route
            path="/categories/createcategory"
            element={<CreateCategory />}
          />
          <Route
            path="/categories/updatecategory/:id"
            element={<UpdateCategory />}
          />

          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/createcompany" element={<CreateCompany />} />
          <Route
            path="/companies/updatecompany/:id"
            element={<UpdateCompany />}
          />

          <Route path="/medicines" element={<Medicines />} />
          <Route
            path="/medicines/createmedicine"
            element={<CreateMedicine />}
          />
          <Route
            path="/medicines/addmedicinelabels/:id"
            element={<AddMedicineLabels />}
          />
          <Route path="/medicines/createmedtype" element={<CreateMedType />} />
          <Route
            path="/medicines/updatemedtype/:id"
            element={<UpdateMedType />}
          />
          <Route
            path="/medicines/updatemedicine/:id"
            element={<UpdateMedicine />}
          />
          <Route path="/medicines/MedicineType" element={<MedicineType />} />

          <Route path="SubAdmins" element={<Moderator />} />
          <Route
            path="/SubAdmins/createmoderator"
            element={<CreateModerator />}
          />
          <Route
            path="/SubAdmins/updatemoderator/:id"
            element={<UpdateModerator />}
          />

          <Route path="Settings" element={<Settings />} />
          <Route path="/crud/create" element={<Create />} />
          <Route path="/crud/edit/:id" element={<Edit />} />
        </Route>
        {/* Home Page Routes */}
        {/* Single Routes */}
        <Route index element={<Login />} />
        <Route path="Logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
        {/* Single Routes */}

        {/* Moderator Routes */}
        <Route path="/Moderator" element={<ModeratorLayout />}>
          <Route index element={<ModeratorHome />} />

          <Route path="companies" element={<ModeratorCompany />} />
          <Route path="companies/createcompany" element={<MCreateCompany />} />
          <Route
            path="companies/updatecompany/:id"
            element={<MUpdateCompany />}
          />

          <Route path="categories" element={<ModeratorCategory />} />
          <Route
            path="categories/createcategory"
            element={<MCreateCategory />}
          />
          <Route
            path="categories/updatecategory/:id"
            element={<MUpdateCategory />}
          />

          <Route path="medicines" element={<ModeratorMedicines />} />
          <Route
            path="medicines/createmedicine"
            element={<MCreateMedicine />}
          />
          <Route
            path="medicines/updatemedicine/:id"
            element={<MUpdateMedicine />}
          />

          <Route path="medicinetypes" element={<MmedicineTypes />} />
          <Route
            path="medicinetypes/createmedtype"
            element={<MCreateMedType />}
          />
          <Route
            path="medicinetypes/updatemedtype/:id"
            element={<MUpdateMedType />}
          />
        </Route>
        {/* Moderator Routes */}
        <Route path="/crud" element={<Crud />} />

        {/* Routes for Crud */}
      </Route>
    )
  );
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {/* <ReactQueryDevtools position="bottom-right" /> */}
      </QueryClientProvider>
    </>
  );
};

export default App;
