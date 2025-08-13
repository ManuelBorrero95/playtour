import react from "react";
import { Link } from 'react-router-dom';
const Navbar = () => 
    {
        return(
            <nav style={{ padding: '1rem', background: '#eee', display: 'flex', gap: '2rem' }}>
            <span><strong>Playtour</strong></span>
            <a href="#">Eventos</a>
           <Link to="/crear-evento">Crea tu evento</Link>
            <a href="#">Contacto</a>
            <a href="#">Acceso</a>
          </nav>
        )
    }
   export default Navbar