import { authentication } from "./authenticationTypes";

const initialState = {
  isUser: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt"),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case authentication.LOGIN_SUCCESS:
      return {
        isUser: true,
        token: action.payload,
      };
    case authentication.LOGOUT:
      return {
        token: "",
        isUser: false,
      };
    default:
      return state;
  }
};

export default reducer;
