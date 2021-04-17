import { takeLatest, call, put } from "@redux-saga/core/effects";
import { GET_USERS, setUsers } from './actions';
import { getUsers } from './api';

export function* getUsersWatcher(){
    yield takeLatest(GET_USERS, getUsersFlow);
}

function* getUsersFlow(){
    const users = yield call(getUsers);
    yield put(setUsers(users));
}