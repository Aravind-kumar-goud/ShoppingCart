import React from 'react'
import { useSelector } from 'react-redux';
import {NavLink, useNavigate } from 'react-router-dom'


function Navbar() {

const state = useSelector(state => state);

    return (
        <>
        <div className='main sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >  
                <div className='container'>
                    <NavLink className='navbar-brand fw-bold fs-4' to="/">
                     RAM COLLECTION
                    </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <NavLink  className="nav-link" aria-current="page" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link" to="/products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className='buttons' >
                        <NavLink to='/login' className='btn btn-outline-dark '>
                            <i className='fa fa-sign-in '>Login</i>
                        </NavLink>
                        <NavLink   to='/register' className='btn btn-outline-dark ms-2'>
                            <i className='fa fa-user-plus me-1'>Register</i>
                        </NavLink>
                        <NavLink  to='/cart' className='btn btn-outline-dark ms-2'>
                            <i className='fa fa-shopping-cart me-1'></i>
                            Cart({state.cart.length}) </NavLink>
                        
                        

                    </div>
                </div>
                </div>
            </nav>
            </div>
        </>
    )
}

export default Navbar