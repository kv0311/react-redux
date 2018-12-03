    
//initState
const initState = {
    counter:0,

}
//reducer
const rootReducer = (state=initState,action) =>{
    if(action.type==='INC_COUNTER'){
    
        return {
                
                    ...state,
                    a:state.counter+1};
        }
    if(action.type==='ADD_COUNTER'){
    
            return {
                    ...state,   
                    b:state.counter+10};
            }
            return state;
};
//store
const store = createStore(rootReducer);
//subsciption
store.subscribe(() =>{
    console.log(store.getState());
});
//action
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',value:10});


