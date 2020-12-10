import store from "./store";
import {useSelector} from "react-redux";


const usePending = ([...values]) => {
    const state = useSelector(state => state.pending)
    const pending =[];
    state.map(item => pending.push(item.split('/')))
    const searchValues = [];
    values.map(v => searchValues.push(v.split('/')));
    const response = [];
    searchValues.map(item => {
        if(!item[1]){
            pending.filter(p => p[0] === item[0]).map(p => response.push(`${p[0]}/${p[1]}`))
        }
        else{
            pending.map(p => {
                if(p[0] === item[0] && p[1] === item[1]) response.push(`${item[0]}/${item[1]}`)
            })
        }
    })
    if(response.length) return true;
    else{ return false};
}

export default usePending;