import React from 'react';
import style from "./Paginated.module.css";

const Paginated = ({dogsPerPage, allDogs, paginado, currentPage, setCurrentPage}) => {

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
      pageNumbers.push(i);
      };

  return (
    <div>
      <ul className={style.paginado}>
        {pageNumbers?.map(num => 
            <li key={num}><p onClick={() => paginado(num)}>{num}</p></li>
            )}
      </ul>
    </div>
  )
}

export default Paginated
