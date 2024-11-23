import React from "react";
import { useSelector } from "react-redux";
import {Navigate} from 'react-router-dom';

const PrivateRoute =({children}) => {
    const token = useSelector(state => state.token);
    console.log("Token in PrivateRoute:", token);
    return token ? children : <Navigate to="/" />
// if (!token) {
//     return <Navigate to="/" />; // Redirige si no hay token
//   }

//   return children;
};

export default PrivateRoute;

