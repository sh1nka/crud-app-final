import * as type from '../components/types';

const initialState = {
    users: [],
    loading: false,
    error: null,
}

export default function users(state = initialState, action)
{
    console.log(action);
    switch(action.type)
    {
            case type.GET_USERS_REQUESTED:   
            return{
                ...state,
                loading: true,
            }
            case type.GET_USERS_SUCCESS:
            return{
                ...state,
                loading: false,
                users: action.users,
            }
            case type.GET_USERS_FAILED:
            return{
                ...state,
                loading: false,
                error: action.message,
            }
            case type.DELETE_USER_REQUESTED:
            return{
                ...state,
                loading: true,
                error: action.message,
            }
            case type.DELETE_USER_SUCCESS:
            return{
                ...state,
                loading: false,
                error: action.users,
            }
            case type.DELETE_USER_FAILED:
            return{
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state;
    }
}