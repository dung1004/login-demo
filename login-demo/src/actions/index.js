import callApi from './../utils/index';
import { LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST } from './../constants/index'

export const userLoginFetch = (email, password) => {
    return (dispatch) => {
        
        return callApi('users', 'GET', null)
        .then(res => {
            dispatch(loginRequest(res.data))
            // dispatch(loginSuccess())
        }).catch(err => {
            console.log(err);
            dispatch(loginFailed(err))
        })
    }
}
export const loginRequest = (data) => {
    return {
        type: LOGIN_REQUEST,
        data
    }
}

export const loginSuccess = (userObj) => {
    return {
        type: LOGIN_SUCCESS,
        userObj
    }
}

export const loginFailed = (err) => {
    return {
        type: LOGIN_FAILED,
        err
    }
}
