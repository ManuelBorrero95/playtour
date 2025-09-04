import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // se il file è in src/assets

const Navbar = () => {
  return (
    <header className="w-full">
      {/* riga: logo + menu */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          {/* logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="PlayTour" className="h-7 w-auto" />
          </Link>

          {/* menu */}
          <nav>
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link to="/crear-evento" className="font-bold hover:underline ">
                  Crear evento
                </Link>
              </li>
              <li>
                <Link to="/login" className="font-bold hover:underline">
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link to="/registro" className="font-bold hover:underline">
                  Registrarse
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        
        <h2 className="pb-4 text-lg md:text-xl font-extrabold tracking-tight">
          ENCUENTRA LOS{" "}
          <span className="text-[#C0AF1E]">EVENTOS DE PADEL</span> EN TU CIUDAD
        </h2>
      </div>
    </header>
  );
};

export default Navbar;
