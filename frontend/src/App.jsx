import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"


export default function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/crear-evento" element={<div>Crear evento</div>} />
          <Route path="/login" element={<div>Login</div>} />
          <Route path="/registro" element={<div>Registro</div>} />
        </Routes>
      </main>
    </>
  );
}
