const UserImage = ({ userImage, userName }) => {
    return (
        <img
            className="userImage"
            src={require(`../../Assets/ReviewUserImage/${userImage}`)}
            alt={`User ${userName}`}
        />
    );
};

export default UserImage;
