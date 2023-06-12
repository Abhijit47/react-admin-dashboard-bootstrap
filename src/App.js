import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/sb-admin-2.css';
import Dashboard from './Components/Dashboard/Dashboard.jsx';

import Buttons from './Pages/Components/Buttons';
import Cards from './Pages/Components/Cards';

import UtilitiesBorders from './Pages/Utilities/UtilitiesBorders.jsx';
import UtilitiesColors from './Pages/Utilities/UtilitiesColors';
import UtilitiesAnimation from './Pages/Utilities/UtilitiesAnimations';
import UtilitiesOthers from './Pages/Utilities/UtilitiesOthers';

import Login from './Pages/LoginScreens/Login';
import Register from './Pages/LoginScreens/Register';
import ForgotPassword from './Pages/LoginScreens/ForgotPassword';

import Error404Page from './Pages/OtherPages/Error404Page';
import BlankPage from './Pages/OtherPages/BlankPage';
import Charts from './Pages/Charts.jsx';
import Tables from './Pages/Tables.jsx';
import Homepage from './Components/Homepage/Homepage';

const App = () => {
  return (

    <>
      <Dashboard />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path='/buttons' element={<Buttons />} />
        <Route path='/cards' element={<Cards />} />

        <Route path="/utilities-colors" element={<UtilitiesColors />} />
        <Route path="/utilities-borders" element={<UtilitiesBorders />} />
        <Route path="/utilities-animations" element={<UtilitiesAnimation />} />
        <Route path="/utilities-others" element={<UtilitiesOthers />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />

        <Route path='/404-Not-found' element={<Error404Page />} />
        <Route path='/blank' element={<BlankPage />} />


        <Route path='/charts' element={<Charts />} />
        <Route path='/tables' element={<Tables />} />

      </Routes>
    </>
  );
};

export default App;