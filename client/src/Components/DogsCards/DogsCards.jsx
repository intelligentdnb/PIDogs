import React from 'react'
import { NavLink } from 'react-router-dom'
import img from "../../img/EFF.jpg"
import Loading from '../Loading/Loading.jsx';

function DogsCards({e}) {

  function renderDog(dog) {
    const url = img

    if (e.id < 300) {
        return (
                <div className="card">
                    <img src={e?.image?.url}  alt="Not found"/>
                    <h3>{e?.name}</h3>
                    <p>{e?.temperament || "This breed doesn't have defined temperaments"}</p>
                    <p>Weight: {e?.weight?.metric}</p>
                </div>
            
        )
    } else {
      if(e.createdInDb){
        let temperaments = e.temperaments.map(e => e.name).join(", ")
       e.temperament = temperaments
      }
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
    {   !e 
        ? <Loading/>
        : renderDog(e)
        }
  </NavLink>
  )
}

export default DogsCards
