import "./Show.css";
import ShowImage from "./ShowImage";
import ShowDetails from "./ShowDetails";

const Show = ({ performerName, performerImage, category }) => {
    return (
        <div className="show">
            <div className="head">
                <ShowImage performerImage={performerImage} performerName={performerName}/>
            </div>
            <div className="body">
                <ShowDetails performerName={performerName} category={category} />
            </div>
        </div>
    );
};

export default Show;
