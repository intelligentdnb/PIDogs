import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from '../../Redux/Actions';

const DogsDetail = ({match}) => {
    
    const dispatch = useDispatch()
    
    const id = match.params.id;

useEffect(() => {
    dispatch(getDetail(id))
}, [dispatch, id])

const aDog = useSelector((state) => state.detailDog)
// [ ] Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
// [ ] Altura
// [ ] Peso
// [ ] Años de vida

function renderDog(dog) {
    const url ="https://www.nationalgeographic.com.es/medio/2021/03/09/perro_4da5a8be_800x1200.jpg"

    if (id.length < 4) {
        return (
                <div>
                    <p>{aDog?.name}</p>
                    <img src={aDog?.image?.url}  alt="Not found"/>
                    <p>{aDog?.height?.metric}</p>
                    <p>{aDog?.weight?.metric}</p>
                    <p>{aDog?.life_span}</p>
                    <p>{aDog?.temperament}</p>
                </div>
            
        )
    } else {
        if (!aDog.id) {
            <h1>Loading...</h1>
        }
        aDog?.forEach((e) =>{
            e.temperament= ""
            for(let i = 0; i<e.temperaments.length; i++){
                e.temperament += e.temperaments[i].name.toString() + ", "
            }
        })
        return (
            <div>
                <div>
                    <p>{aDog[0]?.name}</p>
                    <img src={url} alt="Not found"/>
                    <p>{aDog[0]?.height.metric}</p>
                    <p>{aDog[0]?.weight.metric}</p>
                    <p>{aDog[0]?.life_span}</p>
                    <p>{aDog[0]?.temperament}</p>
                </div>
            </div>
        )
    }
}

  return (
    <div>
        {typeof(aDog) === "undefined" 
        ? <h1>Loading...</h1>
        : renderDog(aDog)
        }
        </div>
  )
}

export default DogsDetail
