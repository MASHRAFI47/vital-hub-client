import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root/Root';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import AuthProvider from './providers/AuthProvider/AuthProvider';
import Login from './pages/Login/Login';
import Prescription from './pages/Prescription/Prescription';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';
import About from './pages/Home/About/About';
import Patients from './pages/Patients/Patients';
import PatientDetails from './components/PatientDetails/PatientDetails';
import Prescribed from './pages/Prescribed/Prescribed';
import MyPrescription from './pages/MyPrescription/MyPrescription';
import UpdatePrescription from './pages/UpdatePrescription/UpdatePrescription';
//toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyPrescriptions from './pages/MyPrescriptions/MyPrescriptions';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />
      },
      {
        path: "/patients",
        element: <PrivateRoute><Patients /></PrivateRoute>,
        loader: () => fetch("http://localhost:4000/vitalUsers")
      },
      {
        path: "/patientDetails/:id",
        element: <PrivateRoute><PatientDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:4000/vitalUsers/${params.id}`)
      },
      {
        path: "/prescription",
        element: <PrivateRoute><Prescription /></PrivateRoute>
      },
      {
        path: "/prescribed",
        element: <PrivateRoute><Prescribed /></PrivateRoute>
      },
      {
        path: "/update-prescription/:id",
        element: <PrivateRoute><UpdatePrescription /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:4000/prescriptions/${params.id}`)
      },
      {
        path: "/my-prescription/:id",
        element: <MyPrescription />,
        loader: () => fetch(`http://localhost:4000/prescriptions`)
      },


      {
        path: "/my-prescriptions/:id",
        element: <MyPrescriptions />,
        loader: () => fetch(`http://localhost:4000/prescriptions`)
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>,
)
