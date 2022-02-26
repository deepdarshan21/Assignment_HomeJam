const UserImage = ({ userImage, userName }) => {
    return (
        <img
            className="userImage"
            src={require(`../../Assests/ReviewSection/${userImage}`)}
            alt={`User ${userName}`}
        />
    );
};

export default UserImage;
