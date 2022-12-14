import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
//import { Link } from 'react-router-dom';
import { searchDog } from '../../Redux/Actions';


const SearchBar = ({setCurrentPage}) => {

    const dispatch = useDispatch();
    const [dogName, setDogName] = useState("");
    const allDogs = useSelector(state => state.allDogs)

    const handleSubmit = (e) => {
        e.preventDefault(); 
        dispatch(searchDog(dogName));
        e.target.reset();
        setCurrentPage(1);
    };

    const handleChange = (e) => {
        e.preventDefault();
        setDogName(e.target.value);
    };

  return (
    <div>
        <div className='searchbar'>
              <form onSubmit={(e) => handleSubmit(e)}>
                <input className='input'
                  placeholder="Search dog..."
                  name="name"
                  type="text"
                  onChange={(e) => handleChange(e)}
                ></input>
                <input type="submit"></input>
              </form>
            </div>
    </div>
  )
};

export default SearchBar
