import { createStore, applyMiddleware } from "redux";
import reducer from "./authentication/authenticationRecucer";
import ThunkMiddleware from "redux-thunk";

const store = createStore(reducer, applyMiddleware(ThunkMiddleware));
export default store;
