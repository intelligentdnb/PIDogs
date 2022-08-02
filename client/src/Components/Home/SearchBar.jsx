import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
//import { Link } from 'react-router-dom';
import { searchDog } from '../../Redux/Actions';


const SearchBar = () => {

    const dispatch = useDispatch();
    const [dogName, setDogName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchDog(dogName.toLowerCase()));
        e.target.reset();
    };

    const handleChange = (e) => {
        e.preventDefault();
        setDogName(e.target.value);
    };

  return (
    <div>
        <div>
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
