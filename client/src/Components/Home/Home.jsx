import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getDogs} from "../../Redux/Actions/index.js";
import DogsCards from '../DogsCards/DogsCards';
import Paginated from './Paginated.jsx';
import NavBar from '../NavBar/NavBar.jsx';

const Home = () => {

const dispatch = useDispatch()

const allDogs = useSelector((state) => state.allDogs)

// perros a mostrar en pagina
const [dogsPerPage, setDogsPerPage] = useState(8);
// pagina en la que estoy
const [currentPage, setCurrentPage] = useState(1);

// paginas a mostrar en el paginado minimo 0 / maximo 10
const [firstPage, setFirstPage] = useState(0);
const [lastPage, setLastPage] = useState(10);

// en lastItem guardo el ultimo item que estoy renderizando
const lastItem = currentPage * dogsPerPage;
// en firstItem guardo el primer item que estoy renderizando 
const firstItem = lastItem - dogsPerPage;
//en currentItem guardo los items que estoy renderizando (por ej: del 0 al 10)
const currentDogs = allDogs?.slice(firstItem, lastItem);
// si el numero esta dentro de mi limite maximo y minimo, renderizo los numbers pages

const paginado = (pageNumber) => {
  setCurrentPage(pageNumber);
};

useEffect(() => {
    dispatch(getDogs())
},[dispatch])






  return (
    <div>
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
