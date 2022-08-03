import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from '../../Redux/Actions';
import img from "../../img/EFF.jpg"

const DogsDetail = ({ match }) => {

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
        const url = img

            if (id.length < 4) {
                return (
                    <div className="detailCard">
                        <div>
                            <h6>Name of the dog</h6>
                            <p>{aDog?.name}</p>
                            <h6>Height of the dog</h6>
                            <p>{aDog?.height?.metric}</p>
                            <h6>Weight of the dog</h6>
                            <p>{aDog?.weight?.metric}</p>
                            <h6>Life span of the dog</h6>
                            <p>{aDog?.life_span}</p>
                            <h6>Temperaments of the dog</h6>
                            <p>{aDog?.temperament ||  "No temperaments for this breed"}</p>
                        </div>
                        <div className="divImagenDetail">
                            <img src={aDog?.image?.url} alt="Not found" className="imagenDetail" />
                        </div>
                    </div>

                )
            } else {
                
                // aDog?.forEach((e) => {
                //     e.temperament = ""
                //     for (let i = 0; i < e.temperaments.length; i++) {
                //         e.temperament += e.temperaments[i].name.toString() + ", "
                //     }
                // })
                //aDog?.map(e => e.temperaments)

                //   if(aDog.createdInDb !== false){
                //       let temperamentsString = aDog.temperaments.map(e => e.name).join(", ")
                //      aDog.temperament = temperamentsString
                //      console.log("aaaa", temperamentsString)
                //      console.log(aDog)
                //     }
                console.log(aDog)
                //      let temperamentsString = aDog.temperaments.map(e => e.name).join(", ")
                //      aDog.temperament = temperamentsString
                //<p>{aDog[0]?.temperaments[0]?.name}, {aDog[0]?.temperaments[1]?.name}, {aDog[0]?.temperaments[2]?.name} {aDog[0]?.temperaments[3]?.name}
                return (
                    <div className="detailCard">
                        <div>
                            <h6>Name of the dog</h6>
                            <p>{aDog[0]?.name}</p>
                            <h6>Height of the dog</h6>
                            <p>{aDog[0]?.height}</p>
                            <h6>Weight of the dog</h6>
                            <p>{aDog[0]?.weight}</p>
                            <h6>Life span of the dog</h6>
                            <p>{aDog[0]?.life_span}</p>
                            <h6>Temperaments of the dog</h6>
                            <p>{aDog[0]?.temperaments[0]?.name}, {aDog[0]?.temperaments[1]?.name}, {aDog[0]?.temperaments[2]?.name} 
                            {aDog[0]?.temperaments[3]?.name}</p>
                        </div>
                        <div className="divImagenDetail">
                            <img src={url} alt="Not found" className="imagenDetail" />
                        </div>
                    </div>
                )
            }
        }


    //renderizado
    return (
        <div className="containerDetailCard">
            {typeof (aDog) === "undefined"
                ? <h1>Not found!</h1>
                : renderDog(aDog)
            }
        </div>
    )
}

export default DogsDetail
