import React from 'react'
import {NavLink, useHistory} from "react-router-dom";



const NavBar = () => {

const history = useHistory()

  return (
    <>
    <NavLink to="/home">
      <button>Home</button>
    </NavLink>
    <button onClick={() => history.goBack()}>Go Back</button>
    <button onClick={() => history.goForward()}>Go Next</button>
    <NavLink to="/dogcreate">
      <button>Create your own dog!</button>
    </NavLink>
    </>
  )
}

export default NavBar
