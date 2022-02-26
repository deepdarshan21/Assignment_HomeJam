import "./NavSearch.css";
import { AiOutlineSearch } from "react-icons/ai";

const NavSearch = () => {
    return (
        <span className="search-box">
            <AiOutlineSearch size={25} /> <span>Search</span>
        </span>
    );
};

export default NavSearch;
