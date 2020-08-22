import { authentication } from "./authenticationTypes";
import Axios from "axios";

export const login = (message, history) => {
  return function (dispatch) {
    Axios.post("/api/authentication", { message: message })
      .then((result) => {
        if (result.data.success) {
          dispatch({
            type: authentication.LOGIN_SUCCESS,
            payload: result.data.message,
          });

          localStorage.setItem("jwt", result.data.message);
          history.push("/Confession");
        } else {
          alert("Nếu không phải ban quản trị thì đừng cố gắng :))");
          dispatch({ type: authentication.LOGIN_FAILURE });
        }
      })
      .catch(() => {
        alert("Nếu không phải ban quản trị thì đừng cố gắng :))");
        dispatch({ type: authentication.LOGIN_FAILURE });
      });
  };
};

export const logout = (history) => {
  localStorage.removeItem("jwt");
  history.push("/");
  return {
    type: authentication.LOGOUT,
  };
};
