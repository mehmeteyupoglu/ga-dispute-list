import { createStore, applyMiddleware, compose  } from 'redux';
import rootReducer from "../Reducers/";
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../Saga/'

const defaultState = {
  
};

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware, logger),
  
);


const store = createStore(
  rootReducer,
  defaultState,
  
  enhancer
);
sagaMiddleware.run(rootSaga)

export default store;