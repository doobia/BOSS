// if you try to login - 3 outcomes

// * loginstart  ---> user credencials
// * success ---> user credencials
// * failure ---> user credencials

export const LoginStart = (credencials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (credencials) => ({
  type: "LOGIN_SUCCESS",
  payload: credencials,
});

export const LoginFailure = (credencials) => ({
  type: "LOGIN_FAILURE",
});
