import "./Reviews.css";
import { useContext, useState } from "react";
import Review from "../../Components/Review/Review";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { AppContext } from "../../Store/AppContext";

const Reviews = () => {
    const { reviews } = useContext(AppContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage] = useState(Math.ceil(reviews.length / 3));
    const reviewsToDisplay = reviews.slice(currentPage * 3 - 3, currentPage * 3);
    const nextPage = () => {
        if (currentPage === totalPage) {
            setCurrentPage(1);
        } else {
            setCurrentPage(currentPage + 1);
        }
    };
    const prevPage = () => {
        if (currentPage === 1) {
            setCurrentPage(totalPage);
        } else {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="reviews">
            <div className="head">
                <h4 className="heading">
                    <span className="underline">Rev</span>iews
                </h4>
                <div className="slider">
                    <span className="page">{`${currentPage}/${totalPage}`}</span>{" "}
                    <span className="previous" onClick={prevPage}>
                        <IoIosArrowRoundBack size={30} />
                    </span>
                    <span className="next" onClick={nextPage}>
                        <IoIosArrowRoundForward size={30} />
                    </span>
                </div>
            </div>
            <div className="content">
                {reviewsToDisplay.map(
                    ({
                        userNo,
                        userName,
                        userImage,
                        userCity,
                        userState,
                        userCountry,
                        userMessage,
                    }) => (
                        <Review
                            key={userNo}
                            userName={userName}
                            userImage={userImage}
                            userCity={userCity}
                            userState={userState}
                            userCountry={userCountry}
                            userMessage={userMessage}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default Reviews;
