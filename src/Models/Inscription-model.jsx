import { useState } from "react";
import InscriptionView from "../Views/Inscription-view";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const InscriptionModel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InscriptionView
      setEmail={setEmail}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};

export default InscriptionModel;
