import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthWrapper = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return <>{user ? children : null}</>;
};

export default AuthWrapper;
