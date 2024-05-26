import React from 'react'
import '../App.css'
// import { Link } from 'react-router-dom'
// import  PropTypes from 'prop-types'

export default function Navbar(props) {
        return(
            <>
                  <nav className={`navbar  bg-${props.mode} navbar-expand-lg bg-body-tertiary`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className={`text-${props.mode===`light`?'dark':'light'}`}>Textutils</span></a>
    <button className="navbar-toggler navbar-toggler-custom" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><span className={`text-${props.mode===`light`?'dark':'light'}`}>Home</span></a>
        </li>
        {/* <li className="nav-item"> */}
          {/* <a className="nav-link" href="/"><span className={`text-${props.mode===`light`?'dark':'light'}`}>About</span></a> */}
        {/* </li> */}
        
       
      </ul>
      
      <div class="btn-group me-5" role="group" aria-label="First group">
    <button type="button" class=" custom-btn1 " onClick={props.firstcolor}></button>
    <button type="button" class= "custom-btn2" onClick={props.secondcolor}></button>
    <button type="button" class=" custom-btn3" onClick={props.thirdcolor}></button>
    <button type="button" class="custom-btn4" onClick={props.forthcolor}></button>
  </div>

      <div className={`form-check form-switch text-${props.mode===`light`?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode} Mode</label>
</div>
    </div>
  </div>
</nav>
            </>
        )
    
}