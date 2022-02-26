import "./Circles.css";
import Circle from "../../Components/Circle/Circle";
import { BsSuitHeart } from "react-icons/bs";

const Circles = () => {
    return (
        <div className="circles">
            <Circle
                icon={<BsSuitHeart size={30} />}
                iconValue={0}
                iconUnit={"/ second"}
                iconName={"Heart Rate"}
            />
            <Circle
                icon={<BsSuitHeart size={30} />}
                iconValue={0}
                iconUnit={"/ second"}
                iconName={"Heart Rate"}
            />
            <Circle
                icon={<BsSuitHeart size={30} />}
                iconValue={0}
                iconUnit={"/ second"}
                iconName={"Heart Rate"}
            />
            <Circle
                icon={<BsSuitHeart size={30} />}
                iconValue={0}
                iconUnit={"/ second"}
                iconName={"Heart Rate"}
            />
        </div>
    );
};

export default Circles;
