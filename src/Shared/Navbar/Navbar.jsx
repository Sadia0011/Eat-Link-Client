import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import {MdOutlineFastfood} from 'react-icons/md'
import useAuth from '../../Hooks/useAuth';
const Navbar = () => {
  const navLinks=<></>
  const {user}=useAuth()
    return (
        <div className="navbar bg-base-100 sticky">
<div className='max-w-7xl flex  mx-auto'>
<div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li id='sidebar'><NavLink to="/" >Home</NavLink></li>
        <li id='sidebar'><NavLink to="/allFoodItems">All Food Items</NavLink></li>
        <li id='sidebar'><NavLink to="/blog">Blog</NavLink></li>
       {user?.email && <li>
          <a>{user?.displayName  ? user.displayName  : 'unknown'}</a>
          <ul className="p-2">
            <li id='sidebar'><NavLink to="/addedFood">My Added Food Items</NavLink></li>
            <li id='sidebar'><NavLink to="/add">Add a  Food Items</NavLink></li>
            <li id='sidebar'><NavLink to="/orderedFood">My Ordered Food Items</NavLink></li>
            
          </ul>
        </li>}
      {user?.email ?<><button className='btn btn-sm bg-orange-400 text-white'>LogOut</button> </> : <li id='sidebar'><NavLink to="/login">Login</NavLink></li>}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><MdOutlineFastfood className='text-orange-400'></MdOutlineFastfood>Eat Link </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li id='sidebar'><NavLink to="/" >Home</NavLink></li>
        <li id='sidebar'><NavLink to="/allFoodItems">All Food Items</NavLink></li>
        <li id='sidebar'><NavLink to="/blog">Blog</NavLink></li>
     {user?.email && <li tabIndex={0}>
        <details>
          <summary>{user?.displayName  ? user.displayName  : 'unknown'}</summary>
          <ul className="p-2">
            <li id='sidebar'><NavLink to="/addedFood">My Added Food Items</NavLink></li>
            <li id='sidebar'><NavLink to="/add">Add a  Food Items</NavLink></li>
            <li id='sidebar'><NavLink to="/orderedFood">My Ordered Food Items</NavLink></li>
            
          </ul>
        </details>
      </li>}
     
    {user?.email ?<><button className='btn btn-sm bg-orange-400 text-white'>Log Out</button></> : <li id='sidebar'><NavLink to="/login">Login</NavLink></li>}
    </ul>
  </div>
</div>
</div>
    );
};

export default Navbar;