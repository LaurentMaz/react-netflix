import { useEffect, useState } from "react";
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Vérifier l'état de l'authentification et rediriger l'utilisateur si authentifié
    if (user?.email) {
      navigate("/home"); // Rediriger si l'utilisateur est authentifié
    }
  }, [user]);

  return (
    <InscriptionView
      setEmail={setEmail}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};

export default InscriptionModel;
