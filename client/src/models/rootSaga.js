import { fork } from 'redux-saga/effects';
import { getUsersWatcher } from './getUsersSaga';
import { getUserIDWatcher } from './getUserIDSaga';
import { updateUserWatcher } from './updateUserSaga';

export default function* rootSaga(){
    yield fork(getUsersWatcher);
    yield fork(getUserIDWatcher);
    yield fork(updateUserWatcher);
}