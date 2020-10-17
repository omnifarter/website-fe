import axios from 'axios'
const initState = {
    age:null,
}
const URL = "http://localhost:3000"
export default function WebSightReducer(state=initState, action){
    switch(action.type){
        case "SET_RETIREMENT": {
            return{
                ...state,
                retirement:action.result
            }
        }
        case "SET_HOUSING": {
            return{
                ...state,
                housing:action.result
            }
        }
        case "SET_FORM": {
            return{
                ...state,
                name:action.name,
                age:action.age,
                gender:action.gender,
                occupation:action.occupation,
                image:action.image
            }
        }
        case "SET_HEALTHCARE":{
            return{
                ...state,
                healthcare:action.result
            }
        }
        default: return initState
    }
    
}

export const setForm = (name,age,gender,occupation,image) => {
    return({ type:"SET_FORM",name,age,gender,occupation,image})
}
export const getRetirement = (age) => {
    return async (dispatch) =>{
        // do data parsing of parameters here...
        //send for retirement check
        let config = {
            params:{
                age:age
            }
        }
        let response = await axios.get(URL+'/retirement',config)
        let result = response.data.map((item)=>{
            return {topic:item['Subtopic 1'],text:item.Info ,link:item.Link}
        })
        console.log(result)
        dispatch({type:"SET_RETIREMENT",result})
    }
}

export const getHDB = (data) =>{
    return async (dispatch)=>{
        let config={
            params:{
                loan:data.loan,
                HDBtype:data.HDBtype,
                intent:data.intent
            }
        }
        let response = await axios.get(URL+'/housing',config)
        let result = response.data.map((item)=> {
            return {topic:item['Subtopic 1'],text:item.Info ,link:item.Link}
        })
        dispatch({type:"SET_HOUSING",result})
    }
}

export const getHospital=(age,ISP,PEC)=>{
    return async(dispatch)=>{
        let ageGeneration;
        switch(true){
            case (age<=60):
                ageGeneration=null;
                break;
            case (age>=71):
                ageGeneration='Pioneer';
                break;
            case(age>=61):
                ageGeneration='Merdeka';
            default:
                ageGeneration=null;
                break;
        }
        let config = {
            params:{
                age:age,
                ISP:ISP,
                PEC:PEC,
                generation:ageGeneration
            }
        }
        console.log(config)
        let response = await axios.get(URL+'/healthcare',config)
        let result = response.data.map((item)=> {
            return {topic:item['Subtopic 1'],text:item.Info ,link:item.Link}
        })
        dispatch({type:"SET_HEALTHCARE",result})
    
    }
}
