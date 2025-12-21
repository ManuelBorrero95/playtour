import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";

function Navbar() {
const { isAuthenticated, user, logout } = useAuth();


  return (
    <header className="w-full">
      {/* riga: logo + menu */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="PlayTour" className="h-7 w-auto" />
          </Link>


          <nav>
            <ul className="flex items-center gap-6 text-sm">


              {isAuthenticated && (

                <>

                  <li>
                    <span className="font-bold hover:underline">{user.username}</span>
                  </li>
                </>

              )

              }


              <li>
                <Link to="/" className="font-bold hover:underline">
                  Home
                </Link>
              </li>


              {isAuthenticated && (
                <>
                  <li>
                    <Link
                      to="/crear-evento"
                      className="font-bold hover:underline"
                    >
                      Crear evento
                    </Link>
                  </li>


                  <li>
                    <button
                      onClick={logout}
                      className="font-bold hover:underline"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}


              {!isAuthenticated && (
                <>
                  <li>
                    <Link to="/login" className="font-bold hover:underline">
                      Iniciar sesión
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="font-bold hover:underline">
                      Registrarse
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>

        <h2 className="pb-4 text-lg md:text-xl font-extrabold tracking-tight">
          ENCUENTRA LOS{" "}
          <span className="text-[#C2C719]">EVENTOS DE PADEL</span> EN TU CIUDAD
        </h2>
      </div>
    </header>
  );
}

export default Navbar;
