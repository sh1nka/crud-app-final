export const GET_USERS = 'GET_USERS';
export const SET_USERS = 'SET_USERS';
export const GET_USER_ID = 'GET_USER_ID';

export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users,
});

export const getUsers = () =>({
    type: GET_USERS,
});

export const getUserID = () => ({
    type: GET_USER_ID,
});