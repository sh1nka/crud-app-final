import { takeLatest, call, put } from "@redux-saga/core/effects";
import { GET_USER_ID, setUsers } from './actions';
import { getUserID } from './api';

export function* getUserIDWatcher(){
    yield takeLatest(GET_USER_ID, getUserIDFlow);
}

function* getUserIDFlow(){
    const users = yield call(getUserID);
    yield put(setUsers(users));
}