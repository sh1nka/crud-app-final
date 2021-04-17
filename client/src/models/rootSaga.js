import { fork } from 'redux-saga/effects';
import { getUsersWatcher } from './getUsersSaga';

export default function* rootSaga(){
    yield fork(getUsersWatcher);
}