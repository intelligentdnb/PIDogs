import React from 'react';


const Paginated = ({dogsPerPage, allDogs, paginado, currentPage, setCurrentPage}) => {

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
      pageNumbers.push(i);
      };

  return (
    <div>
      <ul className="paginadoPosta">
        {pageNumbers?.map(num => 
            <li className='numerosPaginado' key={num}><p classname="numerosPaginadoP" onClick={() => paginado(num)}>{num}</p></li>
            )}
      </ul>
    </div>
  )
}

export default Paginated
