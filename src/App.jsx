import React, { useEffect } from "react";
import Routing from "./routes/Routing";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./store/actions/UserActions";
import { asyncRenderProducts } from "./store/actions/ProductActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncRenderProducts());
  }, [dispatch]);

  return (
    <>
      <Routing />
    </>
  );
};

export default App;
