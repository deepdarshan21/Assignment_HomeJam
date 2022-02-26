const ShowImage = ({ performerImage, performerName }) => {
    return (
        <img
            className="showImage"
            src={require(`../../Assets/ShowPerformerImage/${performerImage}`)}
            alt={performerName}
        />
    );
};

export default ShowImage;
