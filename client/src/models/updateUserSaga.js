import { takeLatest, call, put } from "@redux-saga/core/effects";
import { UPDATE_USER } from './actions';
import { updateUser } from './api';

export function* updateUserWatcher(){
    yield takeLatest(UPDATE_USER, updateUserFlow);
}

function* updateUserFlow(action){
        yield call(updateUser, action);
};