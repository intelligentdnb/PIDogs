import React from 'react'
import { NavLink } from 'react-router-dom'
import "./dogscards.css"


function DogsCards({e}) {

  return (
  <NavLink to={"/details/" + e.id}>
    <div>
      <img src={e.image.url}/>
      <h1>{e.name}</h1>
      <p>{e.temperament}</p>
      <p>{e.weight.metric}</p>
    </div>
  </NavLink>
  )
}

export default DogsCards
