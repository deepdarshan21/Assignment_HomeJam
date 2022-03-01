import "./NavCart.css";
import { FiShoppingBag } from "react-icons/fi";

const NavCart = () => {
    return (
        <span className="nav-cart">
            <FiShoppingBag size={25} />
        </span>
    );
};

export default NavCart;
