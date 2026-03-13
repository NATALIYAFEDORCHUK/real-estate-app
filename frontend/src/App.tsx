import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import OpenDeals from "./components/OpenDeals/OpenDeals";
import Header from "./components/Header/Header";
import Register from "./components/Login/Register";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";


function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/properties" element={<ProtectedRoute><OpenDeals /></ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;

