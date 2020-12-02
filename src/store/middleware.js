const middleware = (store) => next => action => {
     //console.log("Action:", action);
    const result = next(action);
     //console.log("result", result)
    return result;
}

export default middleware;