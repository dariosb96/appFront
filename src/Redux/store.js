
import { createStore, applyMiddleware, compose } from "redux";
import {thunk}  from "redux-thunk";
import rootReducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //  sirve para conectar nuestra App con la extensión REDUX DEVTOOLS DEL NAVEGADOR

//crea el almacenamiento de redux
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)) // sirve para que podamos hacer peticiones a una Api/servidor
);

export default store;