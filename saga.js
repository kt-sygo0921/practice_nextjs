import {call, put, takeEvery} from 'redux-saga/effects';
import { actionTypes } from './constants/actionTypes';
import { startClock } from './actions/action';

function* fetchUser() {
    yield call (setInterval(() => {
        put(startClock())
    }, 1000));
}


function* requestSaga() {
    yield takeEvery(actionTypes.TICK, fetchUser)
}

export default requestSaga;