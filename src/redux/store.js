import { createStore, applyMiddleware,compose  } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas/rootSaga";
import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

    sagaMiddleware.run(rootSaga)

export default store



// https://stackoverflow.com/questions/55027240/connecting-redux-devtools-and-thunk-middleware-to-store
