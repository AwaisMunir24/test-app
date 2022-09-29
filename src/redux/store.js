import { createStore ,applyMiddleware,compose} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import combinedReducer from "../redux/reducers";

const initialState={};
const middleware=[thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(combinedReducer,initialState,composeEnhancers(applyMiddleware(...middleware)))