import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AuthWrapper = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (!storedUser || storedUser === "undefined") {
        setUser(null);
        toast.error("Please login to access this page!");
        navigate("/login");
      } else {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
      toast.error("Invalid user data. Please login again.");
      navigate("/login");
    }
  }, [navigate]);

  return <>{user ? children : null}</>;
};

export default AuthWrapper;
