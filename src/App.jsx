import React, { useEffect } from "react";
import Routing from "./routes/Routing";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./store/actions/UserActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
  });

  return (
    <>
      <Routing />
    </>
  );
};

export default App;
