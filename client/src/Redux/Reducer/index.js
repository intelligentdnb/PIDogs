
const initialState = {
    allDogs: [],
    detailDog: [],
}


function rootReducer(state = initialState, action){
    switch(action.type){
        case "GET_ALL_DOGS":
            return {
                ...state,
                allDogs: action.payload
            }
        case "GET_DETAIL":
            return {
                ...state,
                detailDog: action.payload
            }
        case "GET_DOG":
            return {
                ...state,
                allDogs: action.payload
            }

        default: return state
    }
}

export default rootReducer;