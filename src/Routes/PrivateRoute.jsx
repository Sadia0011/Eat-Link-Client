import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";
const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth();
    const location = useLocation();
    if(loading){
 return <progress className="progress progress-warning w-56" value="100" max="100"></progress>
    }
   if(user){
  return children
   }
   return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
  };
export default PrivateRoute;