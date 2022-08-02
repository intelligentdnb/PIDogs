import React from 'react'
import { NavLink } from 'react-router-dom'
import "./dogscards.css"


function DogsCards({e}) {

  

  return (
  <NavLink to={"/details/" + e.id}>
    <div>
      <img src={e.image?.url || "https://www.nationalgeographic.com.es/medio/2021/03/09/perro_4da5a8be_800x1200.jpg"} alt="not found"/>
      <h1>{e.name}</h1>
      <p>{e.temperament}</p>
      <p>{e.weight.metric}</p>
    </div>
  </NavLink>
  )
}

export default DogsCards
