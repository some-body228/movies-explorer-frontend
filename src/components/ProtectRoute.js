import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute(props) {
  console.log(props.loggedIn)
  return (
    <Route>
      {() =>
        props.loggedIn ? (
          <props.component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    </Route>
  );
}
export default ProtectedRoute;
