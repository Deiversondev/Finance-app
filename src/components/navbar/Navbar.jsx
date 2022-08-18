import React from 'react'
import {Outlet, Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <h1>hhhhhhhhhhhg
            <Link to='/all' >Todas as dívidas</Link>
            
        </h1>
        <Outlet/>
    </div>
  )
}

export default Navbar;