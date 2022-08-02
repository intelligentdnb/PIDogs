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
        const resp = await axios.get("http://localhost:3001/dogs?name=" + name);
        dispatch({ type: "GET_DOG", payload: resp.data });
    }
};

export function createDog(dog) {
    return async function(dispatch){
        const dogCreated = await axios.post("http://localhost:3001/dogs", dog)
    return dispatch({type: "CREATE_DOG", payload: dogCreated.data})
    }
};

export function showTemperaments(){
    return async function(dispatch){
        const temps = await axios.get("http://localhost:3001/temperaments");
        dispatch({type: "SHOW_TEMPERAMENTS", payload: temps.data})
    }
};

export function orderByName(payload) {
    return function(dispatch) {
            dispatch({
                type: "ORDER_BY_NAME",
                payload: payload
            })
        }
    };

export function orderByKG(payload) {
    return function (dispatch) {
        axios.get('http://localhost:3001/dogs')
                dispatch({
                    type: "ORDER_BY_KG",
                    payload
                })
            }
    };    

export function filterDogsBy(value) {
    
    if (value === "DB") {
      return {
        type: "DB",
      };
    } else if (value === "API") {
      return {
        type: "API",
      };
    } else if (value === "ALL") {
      return {
        type: "ALL",
      };
    }
};

export function filterByTemps(payload) {
    return {
        type: "FILTER_BY_TEMPS",
        payload
    }
};

