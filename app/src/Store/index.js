import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga'

const SagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(SagaMiddleware)

const store = createStore(rootReducer, enhancer);

SagaMiddleware.run(rootSaga)

export default store;