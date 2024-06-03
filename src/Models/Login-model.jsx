import { useState } from "react";
import LoginView from "../Views/Login-view";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginModel = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <>
      <LoginView
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        error={error}
      />
    </>
  );
};

export default LoginModel;
