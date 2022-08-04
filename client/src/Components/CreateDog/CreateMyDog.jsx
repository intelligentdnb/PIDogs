import React, {useEffect, useState} from "react";
import { showTemperaments, createDog } from "../../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";

export function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'Name is required';
    } 
    if (!input.height) {
      errors.height = 'Height is required';
    } else if (!/\d{1,2}-\d{1,2}/g.test(input.height)) {
        errors.height = "Add a height range. Example: '3-17'"
    }
    if (!input.weight) {
        errors.weight = "Weight is required";
    } else if (!/\d{1,2}-\d{1,2}/g.test(input.weight)) {
        errors.weight = "Add a weight range. Example: '5-45'"
    }
    if (!input.life_span) {
        errors.life_span = "Life Span is required"
    }
    if (!input.temperaments) {
        errors.temperaments = "Add at least one temperament"
    }
    return errors;
};  

function CreateMyDog() {

    const [input, setInput] = useState({
        name: "",
        height:"",
        weight:"",
        life_span:"",
        temperaments:[]
    });
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showTemperaments())
    },[dispatch]);

    const temperamentos = useSelector(state => state.allTemps);

    const handleChange = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }
    //input.temperaments.length && input.life_span && input.weight && input.name && input.height
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!errors.life_span && !errors.weight && !errors.name && !errors.height && input.temperaments.length){
          alert("Your breed has been created successfully");
          dispatch(createDog(input))
          setInput({
            name: "",
            height: "",
            weight: "",
            life_span: "",
            temperaments: [],
          })
        } else {
          return alert("You have to fill all the fields");
        }
      };

    function handleSelect(e) {
        if (input.temperaments.includes(e.target.value)) {
          alert("You already selected this temperament");
        } else {
          setInput((prev) => ({
            ...prev,
            temperaments: [...prev.temperaments, e.target.value],
          }));
        }
    }

    const tempsNames = (array) => {
        let names = [];
        temperamentos?.forEach((e) => (
            array.forEach(name => {
                if (name === e.name) {
                    names.push(e.name);
                }
            })
        ))
        return names;
    }

    const handleDelete = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            temperaments: input.temperaments?.filter(f => f !== e.target.name)
        })
    }

return (
<div className="containerCreate">
    <div className="backgroundCreate">
        <h1>Create your dog!</h1>
        <form onSubmit={(e) => handleSubmit(e)} className="formCreate">
            <input onChange={(e) => handleChange(e)} name="name" value={input.name} placeholder="Name of your dog!"></input>
            {errors.name ? <p>{errors.name}</p> : false}
            <br/> 
            <input onChange={(e) => handleChange(e)} name="height" value={input.height}type="text" placeholder="Height's dog"></input>
            {errors.height ? <p>{errors.height}</p> : false}
            <br/>
            <input onChange={(e) => handleChange(e)} name="weight" value={input.weight} type="text" placeholder="Weights dog"></input>
            {errors.weight ? <p>{errors.weight}</p> : false}
            <br/>
            <input onChange={(e) => handleChange(e)} name="life_span" value={input.life_span} type="text" placeholder="Life span of your dog"></input>
            {errors.life_span ? <p>{errors.life_span}</p> : false}
            <br/>
            <select name="temperaments" value={input.temperaments} multiple={false} onChange={(e) => handleSelect(e)}>
                {temperamentos?.map((e) =>{
                return <option value={e.name} key={e.id}>{e.name}</option>
                })}
            </select>
            {errors.temperaments ? <p>{errors.temperaments} </p> : false}
            <br/>
                    {
                        input.temperaments.map((e) => (
                            <div id={e} key={e} value={e.name} name={e.name} className="createTemps">
                             <p name={e.name}>   {tempsNames([e])} </p>
                             <button onClick={(e)=> handleDelete(e)} name={e} className="btnCreateTemps">x</button>
                            </div>
                        ))
                    }
            <button type="submit">Create!</button> 
        </form>            
    </div>
</div>
)

}

export default CreateMyDog;
