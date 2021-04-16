import { } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects'

const axios = require('axios');

const apiUrl = 'http://localhost:7000/dashboard/users';

function getApi()
{
    console.log('getApi')
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(res => res.json())
    .catch((err) => {throw err})
    
    /*axios({
        method: 'get',
        url: 'http://localhost:7000/dashboard/users'
    })
    
    .then(res => console.log(res.data))
    .catch((err) => {throw err})*/
}

function* getUsers(action)
{
    try
    {
        const users = yield call(getApi);
        yield put({type: 'GET_USERS_SUCCESS', users: users});
        console.log('getUsers Action', action)
    }
    catch(err)
    {
        yield put({type: 'GET_USERS_FAILED', message: err.message});
    }
}

function* usersSaga()
{
    yield takeEvery('GET_USERS_REQUESTED', getUsers)
}

export default usersSaga;