import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo1.png'

function Navbar() {
  return (
    <div className="bg-white px-24 py-3 shadow">
        <div className="flex flex-row justify-between items-center font-normal">
            <div>
                <Link to='/'>
                    <img src={Logo}/>
                </Link>
            </div>
            <nav className="flex">
                <Link to="/" className="text-dark-green text-sm px-5 py-0 hover:text-bright-blue hover:underline underline-offset-8 decoration-2">
                    Home
                </Link>
                <Link to="/covered" className="text-dark-green text-sm px-5 py-0 hover:text-bright-blue hover:underline underline-offset-8 decoration-2">
                    Are you covered?
                </Link>
                <Link to="/blog" className="text-dark-green text-sm px-5 py-0 hover:text-bright-blue hover:underline underline-offset-8 decoration-2">
                    Blog
                </Link>
            </nav>
            <div>
                <button className="bg-bright-blue hover:bg-blue-700 text-white text-base items-center px-4 py-2 rounded-lg shadow-sm">
                    Contact Sales
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
