import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <div className="container-fluid">
        <NavLink  className="navbar-brand"> {props.title}</NavLink>
        {/* <a className="navbar-brand" >{props.title}</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink to="/" className="nav-link "> Home </NavLink>
              {/* <a className="nav-link active" aria-current="page">Home</a> */}
            </li>
            <li className="nav-item">
            <NavLink to="/about" className="nav-link"> {props.about} </NavLink>
              {/* <a className="nav-link">{props.about}</a> */}
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.t}  type="checkbox"  id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault ">Enable Dark Mode</label>
          </div>
          {/* <div className={`form-check form-switch text-${props.mode1==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.t1}  type="checkbox"  id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault ">Enable purple Mode</label>
          </div> */}

        </div>
      </div>
      
    </nav>
    
  )
}

Navbar.propTypes= {
            title: PropTypes.string.isRequired,
            about: PropTypes.string.isRequired}
            // isrequired is used to ensure that title gets the value

Navbar.defaultProps = {
    title: 'Set title here',
    about: 'About'
};