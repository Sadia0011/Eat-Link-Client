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

import Reg from '../pages/Reg/Reg';
import SignIn from '../pages/Login/SignIn';
import SingleFoodPage from '../pages/SingleFoodPage/SingleFoodPage';
import Purchase from '../pages/Purchase/Purchase';
import PrivateRoute from './PrivateRoute';
import MyAddedFood from '../pages/MyAddedFoods/MyAddedFood';
import AddAFood from '../pages/AddAFood/AddAFood';
import MyOrderedFood from '../pages/MyOrderedFood/MyOrderedFood';
import UpdateItem from '../pages/UpdateItem/UpdateItem';
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
                element:<AllFoodItems></AllFoodItems>,
                loader:()=>fetch("http://localhost:5000/allfooditems")
            },
            {
                path:"/allfooditems/:id",
                element:<SingleFoodPage></SingleFoodPage>,
                loader:({params})=>fetch(`http://localhost:5000/allfooditems/${params.id}`)
            },
            {
                path:"/purchase/:id",
                element:<PrivateRoute><Purchase></Purchase></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/allfooditems/${params.id}`)
            },
            {
                path:"/updateItem/:id",
                element:<PrivateRoute><UpdateItem></UpdateItem></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/allfooditems/${params.id}`)
            },
            {
                path:"/myAddedFood",
                element:<PrivateRoute><MyAddedFood></MyAddedFood></PrivateRoute>
            },
            {
                path:"/add",
                element:<PrivateRoute><AddAFood></AddAFood></PrivateRoute>
            },
            {
                path:"/myOrderedFood",
                element:<PrivateRoute><MyOrderedFood></MyOrderedFood></PrivateRoute>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
           
            {
                path:"/login",
                element:<SignIn></SignIn>
            },
            {
                path:"/reg",
                element:<Reg></Reg>
            },
        ]
    }
]) 

export default Router;

