import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import SignIn from "./pages/SignIn";
import CreateEvent from "./pages/CreateEvent"
import SignUp from "./pages/SignUp";
import BounceLoader from "./components/BounceLoader";
export default function App() {


 const [isLoading, setIsLoading] = useState(true);


 useEffect(() => {
    // ✅ FAKE LOADER: dura 2 secondi
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);


    if (isLoading) {
    // mentre isLoading = true mostri solo il loader
    return <BounceLoader />;
  }


  return (
    <>     
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/crear-evento" element={<CreateEvent></CreateEvent>} />
          <Route path="/login" element={<SignIn></SignIn>} />
          <Route path="/signup" element={<SignUp></SignUp>} />
        </Routes>
      </main>
    </>
  );
}
