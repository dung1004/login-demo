import * as types from "./../constants/index";

const initialState = {
  currentUser: [],
  loading: false,
  error: {},
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.userObj,
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        error: action.err,
      };
    default:
      return state;
  }
}
