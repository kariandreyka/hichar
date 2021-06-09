import * as ActionTypes from './actionTypes';

const setUserInfoReducer = (state, action) => ({
    ...state,
    userInfo: action.payload,
});

const initialState = {
    userInfo: false,
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_USER_INFO:
            return setUserInfoReducer(state, action);
        case ActionTypes.RESET:
            return initialState;
        default:
            return state;
    }
};
