import * as ActionTypes from './actionTypes';

export const setUserInfo = (data) => ({
    type: ActionTypes.SET_USER_INFO,
    payload: data,
});

export const Logout = () => ({ type: ActionTypes.RESET });
