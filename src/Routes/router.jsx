import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from '../Layout/Main';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home/Home/Home';
import AllFoodItems from '../pages/AllFoodItems/AllFoodItems';
import Blog from '../pages/Blog/Blog';
import LOgin from '../pages/Login/LOgin';
import Reg from '../pages/Reg/Reg';
const Router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"/allFoodItems",
                element:<AllFoodItems></AllFoodItems>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/login",
                element:<LOgin></LOgin>
            },
            {
                path:"/reg",
                element:<Reg></Reg>
            },
        ]
    }
]) 

export default Router;
