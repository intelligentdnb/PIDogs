import axios from "axios";


export function getDogs(){
    return async function(dispatch) {
        const dogs = await axios.get("http://localhost:3001/dogs")
        dispatch({
            type: "GET_ALL_DOGS",
            payload: dogs.data
        });
    }
};

export function getDetail(id) {
    return async function(dispatch) {
        const resp = await axios.get('http://localhost:3001/dogs/' + id);
        dispatch({ type: "GET_DETAIL", 
        payload: resp.data 
    });
    }
};

export function searchDog(name) {
    return async function(dispatch) {
        const resp = await axios.get('http://localhost:3001/dogs?name=' + name);
        dispatch({ type: "GET_DOG", payload: resp.data });
    }
};

