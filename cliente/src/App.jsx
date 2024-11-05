import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Registrar";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
