import "./Review.css";
import UserDetail from "./UserDetail";
import UserImage from "./UserImage";
import UserMessage from "./UserMessage";

const Review = ({ userName, userImage, userCity, userState, userCountry, userMessage }) => {
    return (
        <div className="review">
            <div className="head">
                <UserImage userImage={userImage} userName={userName} />
                <UserDetail
                    userName={userName}
                    userCity={userCity}
                    userState={userState}
                    userCountry={userCountry}
                />
            </div>
            <div className="body">
                <UserMessage userMessage={userMessage} />
            </div>
        </div>
    );
};

export default Review;
