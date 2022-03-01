import "./Navbar.css";
import NavIcon from "../../Components/NavIcon/NavIcon";
import NavSearch from "../../Components/NavSearch/NavSearch";
import NavItem from "../../Components/NavItem/NavItem";
import NavCart from "../../Components/NavCart/NavCart";

const Navbar = () => {
    return (
        <nav className="navbar">
            <span className="left">
                <NavIcon />
            </span>
            <span className="right">
                <NavSearch />
                <NavItem name={"Help"} />
                <NavItem name={"Account"} />
                <NavCart />
            </span>
        </nav>
    );
};

export default Navbar;
