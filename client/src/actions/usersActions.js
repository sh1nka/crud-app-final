// Get Users
import users from "../reducers/usersReducer"
import * as type from '../components/types';

export function getUsers(users){
    return{
        type: type.GET_USERS_REQUESTED,
        payload: users,
    }
}

export function addUser(id){
    return{
        type: 'ADD_USERS_REQUESTED',
        payload: id,
    }
}

export function updateUser(data){
    return{
        type: 'UPDATE_USERS_REQUESTED',
        payload: data,
    }
}

export function removeUser(data){
    return{
        type: 'REMOVE_USERS_REQUESTED',
        payload: data,
    }
}

/*const getUsers = (id) => ({
    type: 'GET_USERS',
    payload: id
});

// Add User

const addUser = (id) => ({
    type: 'ADD_USER',
    payload: id
});

const updateUser = (data) => ({
    type: 'UPDATE_USER',
    payload: data
});

// Remove User
const removeUser = (data) => ({
    type: 'REMOVE_USER',
    payload: data
}); 

export default{
    getUsers,
    addUser,
    updateUser,
    removeUser
}*/

