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
        type: type.CREATE_USER_REQUESTED,
        payload: id,
    }
}

export function findUser(id){
    return{
        type: type.FIND_USER_REQUESTED,
        payload: id,
    }
}

export function updateUser(data){
    return{
        type: type.UPDATE_USER_REQUESTED,
        payload: data,
    }
}

export function deleteUser(id){
    return{
        type: type.DELETE_USER_REQUESTED,
        payload: id,
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

