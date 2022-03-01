import { IoIosArrowRoundForward } from "react-icons/io";
import { HiOutlineTicket } from "react-icons/hi";

const ShowDetails = ({ performerName, category }) => {
    return (
        <div className="details">
            <span className="category">{category}</span>
            <p className="performer-name">{performerName}</p>
            <div className="more">
                <a className="more-info" href=".">
                    <span>More Info</span> <IoIosArrowRoundForward size={25} />
                </a>
                <div className="book-ticket">
                    <HiOutlineTicket size={25} />
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;
