import React from 'react'
import { NavLink } from 'react-router-dom'
import "./dogscards.css"
import img from "../../img/EFF.jpg"

function DogsCards({e}) {

  function renderDog(dog) {
    const url = img

    if (e.id < 300) {
        return (
                <div className="card">
                    <img src={e?.image?.url}  alt="Not found"/>
                    <h3>{e?.name}</h3>
                    <p>{e?.temperament}</p>
                    <p>Weight: {e?.weight?.metric}</p>
                </div>
            
        )
    } else {
        return (
            <div>
                <div className="card">
                    <img src={url} alt="Not found"/>
                    <h3>{e.name}</h3>
                    <p>{e.temperament}</p>
                    <p>Weight: {e.weight}</p>
                </div>
            </div>
        )
    }
}





  return (
  <NavLink to={"/details/" + e.id} className="linkdetails">
    {typeof(e) === "undefined" 
        ? <h1>Loading...</h1>
        : renderDog(e)
        }
  </NavLink>
  )
}


/* 

 <NavLink to={"/details/" + e.id}>
    <div>
      <img src={e.image?.url || "https://cdn.pixabay.com/photo/2017/02/01/09/48/jack-russell-2029214_960_720.jpg"} alt="not found"/>
      <h1>{e.name}</h1>
      <p>{e.temperament}</p>
      <p>{e.weight.metric}</p>
    </div>
  </NavLink>

*/

export default DogsCards
