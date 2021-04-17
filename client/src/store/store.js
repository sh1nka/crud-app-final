import { createStore, applyMiddleware, compose } from 'redux';
//import rootReducer from '../reducers/rootReducer';
import rootReducer from '../models/rootReducers';
import rootSaga from '../models/rootSaga';

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

//const store = compose(applyMiddleware(sagaMiddleware),)(createStore)(rootReducer)
//const store = createStore(rootReducer, applyMiddleware(sagaMiddleware), window.devToolsExtension && window.devToolsExtension(), )(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);


export default store;