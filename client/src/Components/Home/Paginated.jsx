import React from 'react';
import "./Paginated.css";

const Paginated = ({dogsPerPage, allDogs, paginado, currentPage, setCurrentPage}) => {

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
      pageNumbers.push(i);

      };



  return (
    <div>
      <ul className="Paginado">
        {pageNumbers?.map(e => 
            <li key={e}><p onClick={() => paginado(e)}>{e}</p></li>
            )}
      </ul>
    </div>
  )
}

export default Paginated
