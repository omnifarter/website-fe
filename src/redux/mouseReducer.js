const initState = {
    name:'initial name',
}

export default function MouseReducer(state=initState, action){
    switch(action.type){
        case "CHANGE_NAME": {
            return{
                ...state,
                name:action.name
            }
        }
    }
    return initState
}

export const changeName = (name) => {
    return ({
        type:"CHANGE_NAME",
        name
    })
}