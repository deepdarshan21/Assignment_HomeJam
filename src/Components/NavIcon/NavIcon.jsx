import "./NavIcon.css";
import Logo from "../../Assets/logo.png";

const NavIcon = () => {
    return (
        <div className="nav-icon">
            <img className="nav-logo" src={Logo} alt="HOMEJAM" />
        </div>
    );
};

export default NavIcon;
