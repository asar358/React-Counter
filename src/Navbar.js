import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <ul>
            <Link to="/counter">
              <li>Counter</li>  
              </Link>
            <Link to = "/about">
              <li>About</li>  
              </Link>
              
            </ul>
        </nav>
    )
}
