

const initialState = {
    allDogs: [],
    detailDog: [],
    dogCreated:[],
    allTemps:[],
    filterDogs:[],
    allDogsTwo: []
};


function rootReducer(state = initialState, action){
    switch(action.type){
        case "GET_ALL_DOGS":
            return {
                ...state,
                allDogs: action.payload,
                filterDogs: action.payload,
                allDogsTwo: action.payload
            };
        case "GET_DETAIL":
            return {
                ...state,
                detailDog: action.payload
            };
        case "GET_DOG":
            return {
                ...state,
                allDogs: action.payload
            };
        case "CREATE_DOG":
            return {
                ...state,
                dogCreated: action.payload
            };
        case "SHOW_TEMPERAMENTS":
            return {
                ...state,
                allTemps: action.payload
            };
        case "ORDER_BY_NAME":
            const orderName = action.payload === "atoz"
              ? state.allDogs.sort(function (a, b) {
                  if (a.name > b.name) return 1
                  if (b.name > a.name) return -1;
                  return 0;
                })
              : state.allDogs.sort(function (a, b) {
                  if (a.name > b.name) return -1;
                  if (b.name > a.name) return 1;
                  return 0 })
                  return {
                    ...state,
                    filterDogs: orderName
                };
        case "ORDER_BY_KG":
            const orderKG = action.payload === "kg+" ?
            state.allDogs.sort((b, a) => {
                 if(typeof state.allDogs.id === "string"){
                     if(a.weight > b.weight) return 1
                     if(a.weight < b.weight) return -1
                     return 0
                 } else {
                    if(parseInt(a.weight.metric) > parseInt(b.weight.metric)) return 1
                    if(parseInt(a.weight.metric) < parseInt(b.weight.metric)) return -1
                    return 0
                }
                 })
                :
                state.allDogs.sort((a, b) => {
                     if (typeof state.allDogs.id === 'string') {
                         if (a.weight > b.weight) return -1
                         if (a.weight < b.weight) return  1
                         return 0
                     } else {
                        if (parseInt(a.weight.metric) > parseInt(b.weight.metric)) return 1
                        if (parseInt(a.weight.metric) < parseInt(b.weight.metric)) return -1
                        return 0
                    }
                })
                return {
                    ...state,
                    filterDogs: orderKG
                };
            case "FILTER_BY_TEMPS":
                console.log("Payload", action.payload)
                const dogys = state.allDogsTwo;
                const filteredTemps =
                  action.payload === "All"
                    ? dogys
                    : dogys.filter((d) => {
                        if (typeof d.temperament === "string")
                          return d.temperament.includes(action.payload);
                        if (Array.isArray(d.temperaments)) {
                          let temps = d.temperaments.map((t) => t.name);
                          return temps.includes(action.payload);
                        }
                        //return 
                      });
                return {
                  ...state,
                  allDogs: filteredTemps,
                };
            case "ALL":
                return {
                    ...state,
                    allDogs: state.allDogsTwo
                };
            case "API":
                return {
                    ...state,
                    allDogs: state.filterDogs.filter(f => f.id < 300).sort() //los ID de la api llegan a +200
                }
            case "DB":
                return {
                    ...state,
                    allDogs: state.filterDogs.filter(f => f.id.length > 5) //UUIV4 crea un id.length +6
                };
        default: return state
    }
}



// --------------------------------------------------------------
export default rootReducer;