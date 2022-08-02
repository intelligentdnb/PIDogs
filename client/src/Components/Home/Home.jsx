import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getDogs} from "../../Redux/Actions/index.js";
import DogsCards from '../DogsCards/DogsCards';
import Paginated from './Paginated.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import SearchBar from './SearchBar.jsx';
import Orders from './Orders.jsx';
import { orderByName, orderByKG, filterByTemps, filterDogsBy, showTemperaments } from '../../Redux/Actions'

const Home = () => {

const [sortBy, setSortBy] = useState("");
const [selectTemp, setSelectTemp] = useState();

const dispatch = useDispatch()

const allDogs = useSelector((state) => state.allDogs);
const allTemps = useSelector((state) => state.allTemps);


//PAGINADO

// perros a mostrar en pagina
const [dogsPerPage, setDogsPerPage] = useState(8);
// pagina en la que estoy
const [currentPage, setCurrentPage] = useState(1);

// paginas a mostrar en el paginado minimo 0 / maximo 10
//const [firstPage, setFirstPage] = useState(0);
//const [lastPage, setLastPage] = useState(10);

// en lastDog guardo el ultimo doggy que estoy renderizando
const lastDog = currentPage * dogsPerPage; //8
// en firstDog guardo el primer doggy que estoy renderizando 
const firstDog = lastDog - dogsPerPage; //0
//en currentItem guardo los items que estoy renderizando (por ej: del 0 al 10)
const currentDogs = allDogs?.slice(firstDog, lastDog); // el slice te corta un array, pasandole por parametros mi primer y ultimo perro
//

//gracias a este paginado me va actualizando las operaciones de arriba, por eso se lo paso también como propiedad a mi paginado
const paginado = (pageNumber) => {
  setCurrentPage(pageNumber);
};

useEffect(() => {
    dispatch(getDogs())
},[dispatch])

//ORDERS

useEffect(() => {
  dispatch(showTemperaments());
}, [dispatch]);

const sortKG = (e) => {
  setSortBy(e.target.value);
  dispatch(orderByKG(e.target.value))
};

const sortByName = (e) => {
  setSortBy(e.target.value);
  dispatch(orderByName(e.target.value));
};

const sortByLocation = (e) => {
  setSortBy(e.target.value);
  dispatch(filterDogsBy(e.target.value));
};

const sortTemps = (e) => {
  e.preventDefault()
  dispatch(filterByTemps(e.target.value))
  setCurrentPage(1);
}

  return (
    <div>
      <Orders sortByName={sortByName} sortByLocation={sortByLocation} sortKG={sortKG} sortTemps={sortTemps} allTemps={allTemps}/>
      <SearchBar/>
    <Paginated dogsPerPage={dogsPerPage} allDogs={allDogs.length} paginado={paginado} 
               currentPage={currentPage} setCurrentpage={setCurrentPage}/>
      {currentDogs?.map(e => {
       return (
        <DogsCards e={e} key={e.id}/>
       ) 
      })}
    </div>
  )
}

export default Home
