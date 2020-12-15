import {addPending, removePending} from "./PendingStore";
import {addError} from "./ErrorsStore";
import store from "./store";


const middleware = (store) => next => action => {
    //console.log(action)
    const result = next(action);
    //console.log(result)
    return result;
}

export default middleware;