import React from 'react';
import { NavLink } from 'react-router-dom';

import {MdOutlineFastfood} from 'react-icons/md'
const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center p-4 bg-orange-400">
        <aside className="items-center grid-flow-col">
        <a className="btn btn-ghost normal-case text-xl"><MdOutlineFastfood></MdOutlineFastfood>Eat Link </a>

        </aside> 
        <div className="flex flex-col underline lg:flex-row gap-4 md:place-self-center md:justify-self-end">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/addedFood">My Added Food Items</NavLink>
          <NavLink to="/add">Add a  Food Items</NavLink>
          <NavLink to="/orderedFood">My Ordered Food Items</NavLink>
        </div>
        <p className='my-3'>Copyright © 2023 - All right reserved</p>
      </footer>
    );
};

export default Footer;