import {addPending, removePending} from "./PendingStore";
import {addError} from "./ErrorsStore";
import store from "./store";
import actions from "./store";


const actionWrapper = (action, fetch) => {
    return async dispatch => {
        store.dispatch(addPending(action.toString()))
    try{
        const responce = await fetch();
        store.dispatch(removePending(action.toString()))
        store.dispatch(action(responce))
        }
    catch(error){
        store.dispatch(removePending(action.toString()))
        store.dispatch(addError({type: action.toString(), message: error.toString()}))
        }
    }
       
} 

export {actionWrapper};