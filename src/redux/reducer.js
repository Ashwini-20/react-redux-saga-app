
const initialState ={
    message :"User Data display"
} 

const reducerFunc =(state = initialState, action) => {
    if(action.type === "SET_USER_DATA"){
        const user= action.data;
        return [state,...user]
    }
    return state;
}

export default reducerFunc;


