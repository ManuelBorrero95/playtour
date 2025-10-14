import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import SignIn from "./pages/SignIn";
import CreateEvent from "./pages/CreateEvent"

export default function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/crear-evento" element={<CreateEvent></CreateEvent>} />
          <Route path="/login" element={<SignIn></SignIn>} />
        </Routes>
      </main>
    </>
  );
}
