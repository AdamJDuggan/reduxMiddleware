const actionWrapper = async (fetch, action) => {
    dispatch(PendingStore.add(action))
    try{
       const responce = await fetch();
       dispatch(PendingStore.remove(action))
       dispatch(action(responce))
    }
    catch(error){
        dispatch(ErrorsStore.add(action, error))
    }
} 