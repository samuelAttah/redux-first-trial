const loggedReducer=(state = false, action)=>{
    switch(action.type){
        case "SIGN IN":
            return( state=true);
        default: 
            return(state);
    }
}
export default loggedReducer;