import axios from "axios";

import * as types from "./../constants/index";

export const userLoginFetch = (email, password) => {
  return (dispatch) => {
    dispatch(loginRequest());
    return axios
      .get(`${types.API_URL}/users`, {
        params: {
          email: email,
          password: password,
        },
      })
      .then((res) => {
          // check data client vs data api
        if (res && res.data) {
          let { email, password } = res.config.params;
          let newItem = res.data.filter(
            (item) => item.email === email && item.password === password
          );

          if (newItem.length > 0) {
            dispatch(loginSuccess(newItem));
          } else {
            dispatch(loginFailed(types.MESS_ERR_LOGIN));
          }
        }
      })
      .catch((error) => {
        dispatch(loginFailed(error));
      });
  };
};
export const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST,
  };
};

export const loginSuccess = (userObj) => {
  return {
    type: types.LOGIN_SUCCESS,
    userObj,
  };
};

export const loginFailed = (err) => {
  return {
    type: types.LOGIN_FAILED,
    err,
  };
};
