import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './reducers';
import rootSaga from './sagas';

/* Root Saga Middleware */
const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(sagaMiddleware, logger);

/* Root Store with all the combined reducers */
const store = createStore(rootReducer, composeWithDevTools(middlewares));

/* Run the sagas */
sagaMiddleware.run(rootSaga);

export default store;
