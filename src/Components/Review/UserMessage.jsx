const UserMessage = ({ userMessage }) => {
    if (userMessage.length > 235) {
        userMessage = userMessage.slice(0, 235) + "...";
    }
    return (
        <div>
            <p>{userMessage}</p>
        </div>
    );
};

export default UserMessage;
