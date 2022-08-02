import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.temperaments && input.life_span && input.weight && input.name && input.height){
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
        if (input.temperaments.includes(parseInt(e.target.value))) {
          alert("You already selected this temperament");
        } else {
          setInput((prev) => ({
            ...prev,
            temperaments: [...prev.temperaments, parseInt(e.target.value)],
          }));
        }
    }

    const tempsNames = (array) => {
        let names = [];
        temperamentos?.forEach((e) => (
            array.forEach((id) => {
                if (parseInt(id) === e.id) {
                    names.push(e.name);
                }
            })
        ))
        return names;
    }

return (
    <div>
        <h1>Create your dog!</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
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
            <select name="temperaments" value={input.temperaments} onChange={(e) => handleSelect(e)} >
                {temperamentos?.map((e) =>{
                return <option value={e.id} key={e.name}>{e.name}</option>
                })}
            </select>
            {errors.temperaments ? <p>{errors.temperaments} </p> : false}
            <br/>
                    {
                        input.temperaments.map((e) => (
                            <p id={e}>
                                {tempsNames([e])}
                            </p>
                        ))
                    }
            <button type="submit">Create!</button> 
        </form>
            
    </div>
)

}

export default CreateMyDog;




/*
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


componente---




    const [input, setInput] = useState({
        name: "",
        height: "",
        weight: "",
        life_span: "",
        temperaments: [],
    })

    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showTemperaments())
    },[dispatch])
    
    const tempss = useSelector(state => state.allTemps);

    const handleInputChange = function(e) {
        setInput({
            ...input, 
            [e.target.name]: e.target.value});
        setErrors(validate({...input,[e.target.name]: e.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input)
        if (!errors.name && !errors.weight && !errors.height && !errors.life_span) {
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
          return alert("Something went wrong. Please try again.");
        }
      };

    function handleSelect(e) {
        if (input.temperaments.includes(parseInt(e.target.value))) {
          alert("You already selected this temperament. Try again.");
        } else {
          setInput((prev) => ({
            ...prev,
            temperaments: [...prev.temperaments, parseInt(e.target.value)],
          }));
        }
    }

    const tempsNames = (array) => {
        let names = [];
        tempss?.forEach((e) => (
            array.forEach((id) => {
                if (parseInt(id) === e.id) {
                    names.push(e.name);
                }
            })
        ))
        return names;
    }


    return (
        <form onSubmit ={handleSubmit}>
            <div >
                <ul>
                    <div >
                    <li>
                        <label>Name:</label>
                    </li>
                    </div>
                    <input key="name" type="text" name="name" placeholder="Insert the name of your dog..." onChange={handleInputChange} value={input.name}/>
                    {errors.name && (<p>{errors.name}</p>)}
                    <br/>
                    <div>
                    <li>
                        <label>Height:</label>
                    </li>
                    </div>
                    <input key="height" type="text" name="height" placeholder="Insert height of your dog..." onChange={handleInputChange} value={input.height}/>
                    {errors.height && (<p>{errors.height}</p>)}
                    <br/>
                    <div>
                    <li>
                        <label>Weight:</label>
                    </li>
                    </div>
                    <input key="weight" type="text" name="weight" placeholder="Insert weight of your dog..." onChange={handleInputChange} value={input.weight}/>
                    {errors.weight && (<p>{errors.weight}</p>)}
                    <br/>
                    <div>
                    <li>
                        <label>Life Span:</label>
                    </li>
                    </div>
                    <input key="life_span" type="text" name="life_span" placeholder="Insert life span of your dog..." onChange={handleInputChange} value={input.life_span}/>
                    {errors.life_span && (<p>{errors.life_span}</p>)}
                    <br/>
                    <div>
                    <li>
                        <label>Temperaments:</label>
                    </li>
                    </div>
                    <select key="temperaments" name="temperaments" onChange={(e) => handleSelect(e)} required value={input.temperaments}>
                        {
                            tempss?.map((e) => (
                                <option value={e.id} key={e.id}>
                                    {e.name}
                                </option>
                            ))
                        }
                    </select>
                    {errors.temperaments && (<p>{errors.temperaments}</p>)}
                    <br/>
                    {
                        input.temperaments.map((e) => (
                            <p id={e}>
                                {tempsNames([e])}
                            </p>
                        ))
                    }
                    <button type= "submit" name="submit" onClick={handleSubmit}>Create your dog!</button>
                </ul>
            </div>
        </form>
        
    )

}



-------------------------------------------------------
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDog, showTemperaments } from "../../Redux/Actions";

export function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'Name is required';
    } 
    if (!input.height) {
      errors.height = 'Height is required';
    } else if (!/\d{1,2}-\d{1,2}/g.test(input.height)) {
        errors.height = "Add a height range. Example: '10-12'"
    }
    if (!input.weight) {
        errors.weight = "Weight is required";
    } else if (!/\d{1,2}-\d{1,2}/g.test(input.weight)) {
        errors.weight = "Add a weight range. Example: '10-12'"
    }
    if (!input.life_span) {
        errors.life_span = "Life Span is required"
    }
    if (!input.temperaments) {
        errors.temperaments = "Add at least one temperament"
    }
    return errors;
};


const CreateDog = () => {

    const [input, setInput] = useState({
        name: "",
        height:"",
        weight:"",
        life_span:"",
        temperaments:[]
    });
    const [errors, setErros] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showTemperaments())
    },[dispatch]);

    const temperamentos = useSelector(state => state.allTemps);


    const handleSubmit = (e) => {
        e.preventDefault();

    };

    const handleChange = (e) => {
        e.preventDefault();
    }


  return (
    <div>
        <h1>Create your dog!</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input onChange={(e) => handleChange(e)} name="name" placeholder="Name of your dog!"></input>
            <input onChange={(e) => handleChange(e)} name="height" type="text" placeholder="Height's dog"></input>
            <input onChange={(e) => handleChange(e)} name="weight" type="text" placeholder="Weights dog"></input>
            <input onChange={(e) => handleChange(e)} name="life_span" type="text"placeholder="Life span of your dog"></input>
            <select>{temperamentos?.map((e) =>{
                return <option key={e.name}>{e.name}</option>
            })}</select>
            <button>Create!</button>
        </form>
    </div>
  )
};

export default CreateDog

*/
