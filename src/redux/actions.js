//actions

export function getUserData(){
    return {type:"GET_USER_DATA"}
}

export function setUserData(user){
    return {type:"SET_USER_DATA", data: user}
}