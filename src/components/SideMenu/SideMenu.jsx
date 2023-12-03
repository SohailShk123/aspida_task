import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/slices/usersSlice'
import { Link } from 'react-router-dom';

const SideMenu = () => {

  const dispatch = useDispatch();
  const role = useSelector(state => state?.users?.logedInUser?.role)

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div className="bg-dark text-white min-vh-100 p-4">
      <h1 className="text-2xl font-semibold mb-4">Side Menu</h1>
      <ul className="list-unstyled">
        {role === "admin" && (
          <>
            <li className="mb-4">
              <Link to="/dashboard" className="text-white text-decoration-none">
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/widget" className="text-white text-decoration-none">
                Widgets
              </Link>
            </li>
          </>
        )}
        {(role === "user" || role === "admin") && (
          <>
            <li className="mb-4">
              <Link to="/apps" className="text-white text-decoration-none">
                Apps
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/employees" className="text-white text-decoration-none">
                Employees
              </Link>
            </li>
          </>
        )}
      </ul>
      <div>
        <button className="btn btn-danger" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );

}

export default SideMenu