import { NavLink } from "react-router-dom";

const Nav = ({ className }) => (
    <nav className={className}>
        <ul>
            <li><NavLink to="/">Link 1</NavLink></li>
            <li><NavLink to="/2">Link 2</NavLink></li>
            <li><NavLink to="/3">Link 3</NavLink></li>
        </ul>
    </nav>
);

export default Nav;