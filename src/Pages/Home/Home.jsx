import "./Home.css";
import Navbar from "../../Layouts/Navbar/Navbar";
import Brand from "../../Layouts/Brand/Brand";
import Circles from "../../Layouts/Circles/Circles";
import Shows from "../../Layouts/Shows/Shows";
import Reviews from "../../Layouts/Reviews/Reviews";

const Home = () => {
    return (
        <div className="home">
            <div className="start">
                <Navbar />
                <Brand />
                <Circles />
            </div>
            <Shows />
            <Reviews />
        </div>
    );
};

export default Home;
