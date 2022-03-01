import "./NavCart.css";
import { BsBagCheckFill } from "react-icons/bs";

const NavCart = () => {
    return (
        <span className="nav-cart">
            <BsBagCheckFill size={25} />
        </span>
    );
};

export default NavCart;
