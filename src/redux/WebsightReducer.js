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
                housing:action.parsedData
            }
        }
        case "SET_FORM": {
            return{
                ...state,
                name:action.name,
                age:action.age,
                gender:action.gender,
                occupation:action.occupation
            }
        }
        case "SET_HEALTHCARE":{
            return{
                ...state,
                healthcare:action.parsedData
            }
        }
        default: return initState
    }
    
}

export const setForm = (name,age,gender,occupation) => {
    return({ type:"SET_FORM",name,age,gender,occupation})
}
export const getRetirement = (age) => {
    return async (dispatch) =>{
        // do data parsing of parameters here...
        //send for retirement check
        let ageCategory;
        switch(true){
            case (age <=55):
                ageCategory = 0;
                break;
            case (age<=58):
                ageCategory = 1;
                break;
            case (age<=62):
                ageCategory = 2;
                break;
            case (age<=64):
                ageCategory = 3;
                break;
            case (age>=65):
                ageCategory = 4;
                break;
            default: 
                ageCategory = null;
                break;
        }

        let config = {
            params:{
                property:'age',
                category:ageCategory
            }
        }
        console.log('this is the age category:' + ageCategory)
        let response = await axios.get(URL+'/retirement',config)
        let result = response.data.map((item)=>{
            return {topic:item.topic,text:item.text}
        })
        dispatch({type:"SET_RETIREMENT",result})
    }
}

export const getHDB = (data) =>{
    return async (dispatch)=>{
        let config={
            params:{
                property:'loan',
                category:data.loan,
                property2:'HDBtype',
                category2:data.HDBtype
            }
        }
        console.log('this is running with config: ' + config)
        let response = await axios.get(URL+'/housing',config)
        let result = response.data.map((item)=> {
            return {topic:item.topic,text:item.text}
        })
        let parsedData=[]
        result.forEach(item => {
            let index = parsedData.findIndex((element)=>{return element.topic === item.topic})
            if(index!==-1){
                parsedData[index].text += (`
` +item.text)
            }
            else{
                parsedData.push(item)
            }
        });
        console.log(parsedData)
        dispatch({type:"SET_HOUSING",parsedData})
    }
}

export const getHospital=(age,ISP,PEC)=>{
    return async(dispatch)=>{
        let ageCategory;
        switch(true){
            case (age <=40):
                ageCategory = 0;
                break;
            case (age<=70):
                ageCategory = 1;
                break;
            case (age>=71):
                ageCategory = 2;
                break;
            default: 
                ageCategory = null;
                break;
        }
        let ageGeneration;
        switch(true){
            case (age<=60):
                ageGeneration=-1;
                break;
            case (age>=71):
                ageGeneration=0;
                break;
            case(age>=61):
                ageGeneration=1;
            default:
                ageGeneration=-1;
                break;
        }
        let config = {
            params:{
                property:'age',
                category:ageCategory,
                property1:'ageGeneration',
                category1:ageGeneration,
                property2:'ISP',
                category2:ISP,
                property3:'PEC',
                category3:PEC
            }
        }

        let response = await axios.get(URL+'/healthcare',config)
        let result = response.data.map((item)=> {
            return {topic:item.topic,text:item.text}
        })
        let parsedData=[]
        result.forEach(item => {
            let index = parsedData.findIndex((element)=>{return element.topic === item.topic})
            if(index!==-1){
                parsedData[index].text += (`
` +item.text)
            }
            else{
                parsedData.push(item)
            }
        });
        console.log(parsedData)
        dispatch({type:"SET_HEALTHCARE",parsedData})
    
    }
}
