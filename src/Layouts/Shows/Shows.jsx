import "./Shows.css";
import { useContext } from "react";
import Show from "../../Components/Show/Show";
import { AppContext } from "../../Store/AppContext";

const Shows = () => {
    const { shows } = useContext(AppContext);
    return (
        <div className="shows">
            <div className="head">
                <h4 className="heading">
                    <span className="underline">Upc</span>oming Shows
                </h4>{" "}
                <div className="view-all">
                    <span>View All</span>
                </div>
            </div>
            <div className="content">
                {shows.map(({ performerNo, performerName, performerImage, category }) => (
                    <Show
                        key={performerNo}
                        performerName={performerName}
                        performerImage={performerImage}
                        category={category}
                    />
                ))}
            </div>
        </div>
    );
};

export default Shows;
