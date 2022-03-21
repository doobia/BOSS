const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        error: false,
        user: null,
        isFetching: true,
      };
    case "LOGIN_SUCCESS":
      return {
        error: false,
        user: action.payload,
        isFetching: false,
      };
    case "LOGIN_FAILURE":
      return {
        error: true,
        user: null,
        isFetching: true,
      };
    default:
      return state;
  }
};

export default AuthReducer;
