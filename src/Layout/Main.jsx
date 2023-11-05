import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
const Main = () => {
    return (
        <div className='font-BrygadaFamily flex flex-col min-h-screen'>
           <div className='flex-1'>
           <Navbar></Navbar>
           <div className='container mx-auto '>
           <Outlet></Outlet>
           </div>
           </div>
           <div className='mt-auto'>
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Main;