import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Screens/Auth/Login";
import Signup from "./Screens/Auth/Signup";
import Home from "./Screens/Private/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
