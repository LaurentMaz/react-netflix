import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Inscription from "./pages/Inscription";
import Account from "./pages/Account";
import LandingMain from "./pages/Landing-main";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingMain />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/compte" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
