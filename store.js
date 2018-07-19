import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import combine from './reducers/combine';
import createSagaMiddleware from 'redux-saga';
import requestSaga from './saga';

export function initializeStore () {
    const sagaMiddleWare = createSagaMiddleware()
    const store = createStore(combine);
    // const store = createStore(combine, composeWithDevTools(applyMiddleware(sagaMiddleWare)))
    // sagaMiddleWare.run(requestSaga);
    return store;
}