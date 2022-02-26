import "./Circle.css";

const Circle = ({ icon, iconValue, iconUnit, iconName }) => {
    return (
        <div className="circle">
            <div className="icon">{icon}</div>
            <div className="value-unit">
                <span className="value">{iconValue}</span>
                {" "}
                <span className="unit">{iconUnit}</span>
            </div>
            <div className="name">{iconName}</div>
        </div>
    );
};

export default Circle;
