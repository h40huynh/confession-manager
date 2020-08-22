import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isUser = useSelector((state) => state.isUser);

  return (
    <Route
      {...rest}
      render={(props) =>
        isUser ? <Component {...props} /> : <Redirect to="/Authentication" />
      }
    ></Route>
  );
};
