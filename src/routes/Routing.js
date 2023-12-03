import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";
import Layout from "../components/Layout/Layout";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<PrivateRoute />}>
        <Route
          path="/dashboard"
          element={<Layout children={<h1>Dashboard</h1>} />}
        />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/apps" element={<Layout children={<h1>Apps</h1>} />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route
          path="/employees"
          element={<Layout children={<h1>Employees</h1>} />}
        />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/widget" element={<Layout children={<h1>Widget</h1>} />} />
      </Route>
      <Route path="/*" element={<h1>Error : 404 </h1>} />
    </Routes>
  );
};

export default Routing;
