import { all } from 'redux-saga/effects';
import {watchGetData} from './handleData/handleData'

export default function* rootSaga() {
    yield all([ 
        watchGetData() 
    ]);
}