// import React, { useState } from 'react'
import {
    Link,
    useHistory
} from "react-router-dom";
// import axios from 'axios'


const Navbar = () => {

   
    const history = useHistory()
    const switch_info = (search) => {
        history.push('/search?search='+search)
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">UserInfo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/list">List</Link>
                            </li>
                        </ul>

                        <form className="d-flex mx-4" >
                            <input className="form-control me-2" type="search" onChange={e=> switch_info(e.target.value)}
                                placeholder="Search" aria-label="Search" />
                                
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                    </div>
                </div>
            </nav>
         
        </div>
    )
}

export default Navbar
