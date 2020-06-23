const initState = {
    age:null,
}

export default function WebSightReducer(state=initState, action){
    switch(action.type){
        case "GET_DETAILS": {
            return{
                ...state,
                age:action.data.age
            }
        }
    }
    return initState
}

export const getDetails = (data) => {
    return ({
        type:"GET_DETAILS",
        data
    })
}