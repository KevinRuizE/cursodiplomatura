import '../../styles/components/layout/Nav.css'

// import { Link } from 'react-router-dom';
 import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
        <ul className="holder">
            <li><NavLink activeClassName='activo' exact to="/">Inicio</NavLink></li>
            <li><NavLink activeClassName='activo' exact to="/nosotros">Nosotros</NavLink></li>
            <li><NavLink activeClassName='activo' exact to="/servicios">Servicios</NavLink></li>
            <li><NavLink activeClassName='activo' exact to="/galeria">Galeria</NavLink></li>
            <li><NavLink activeClassName='activo' exact to="/novedades">Novedades</NavLink></li>
            <li><NavLink activeClassName='activo' exact to="/contacto">Contacto</NavLink></li>
        </ul>
    </nav>
    );
}

export default Nav;