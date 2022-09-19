import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import sagaGetData from "../sagas/index";

 
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const store = createStore(rootReducer,  applyMiddleware(...middlewares));

sagaMiddleware.run(sagaGetData);
export default store;