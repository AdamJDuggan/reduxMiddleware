import {useSelector} from "react-redux";

const useErrors = (...values) => {
    const response = [];
    const state = useSelector(state => state.errors)
    if(!values.length){
        state.map(error => response.push(error))
    }
    const searchValues = [];
    values.map(v => searchValues.push(v.split('/')));
    searchValues.map(item => {
        // Just store 
        if(!item[1]){
            state.map(error => {
                const store = error.type.split("/")[0]
                if(item[0] === store)response.push(error)
            })
        }
        //Specific action
        else{
            state.map(error => {
                if(error.type === item[0]+"/"+item[1])response.push(error)
            })
        }
    })   
    if(response.length) return response;
    else return false

  
}

export default useErrors;