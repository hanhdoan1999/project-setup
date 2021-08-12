import { call, put, takeEvery } from 'redux-saga/effects';
import {fetchData} from '../getDataFirestore/fetchData'
import { ActionTypes } from '../../redux/const/index-types';


function* handleGetData() {
    const data = yield call(fetchData);
    yield put({type:ActionTypes.GET_DATA_SUCCESS, payload:data});      

}

// function* handleGetData(action) {
//     const data = yield call(fetchData,action.latitude,action.longitude);
//     yield put({type:GET_DATA_SUCCESS, data});      

// }



export function* watchGetData() {
    yield takeEvery(ActionTypes.GET_DATA, handleGetData)
}


