const increment =(num)=>{
    return(
        {type:"INCREMENT",
        payLoad: num
        }
    );
};
const decrement =(num)=>{
    return(
        {type:"DECREMENT",
        payLoad: num
    }
    );
}
const isLogged=()=>{
    return(
        {type:"SIGN IN"}
    )
}

export {increment,decrement,isLogged,}