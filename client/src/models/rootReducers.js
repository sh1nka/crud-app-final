import { SET_USERS, UPDATE_USER } from './actions';

const initialState = {
    users: []
}

export default function rootReducer(state = initialState, action)
{
    switch(action.type)
    {
        case SET_USERS:
            {
                return{
                    ...state,
                    users: action.payload
                }
            }
        case UPDATE_USER:
            {
                return{
                    ...state,
                    users: [...state.users, action.payload]
                }
            }
        default:
            return state
    }
}