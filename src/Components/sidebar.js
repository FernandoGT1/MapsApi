import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    
        <Link to='/Nuevacor' className="text-black">
        <li className="flex md:flex-col lg:flex-row">
          <box-icon name='stats' className="mr-1 md:mr-0 lg:mr-1"></box-icon>
          
          <p className="text-black">Cordenada nueva</p>

        </li>
        </Link>


  );
}

export default Sidebar;
