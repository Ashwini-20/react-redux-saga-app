import {takeEvery,  put} from "redux-saga/effects";
import { setUserData } from "../redux/actions";


function* userHandler(){
    try{
    let response = yield fetch("http://localhost:3005/users")
    let data= yield response.json();
    yield put(setUserData(data))
    }
    catch(error){
        console.log(error);
    }
}

function* sagaGetData(){
    yield takeEvery("GET_USER_DATA", userHandler)
}

export default sagaGetData;