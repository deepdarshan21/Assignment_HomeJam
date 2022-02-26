import India from "../../Assets/Flags/India.png";
import USA from "../../Assets/Flags/USA.png";
import UK from "../../Assets/Flags/UK.png";

const UserDetail = ({ userName, userCountry, userCity, userState }) => {
    let userCountryFlag, userCountryCode;
    switch (userCountry) {
        case "India":
            userCountryFlag = India;
            userCountryCode = "🇮🇳";
            break;
        case "USA":
            userCountryFlag = USA;
            userCountryCode = "🇺🇸";
            break;
        case "UK":
            userCountryFlag = UK;
            userCountryCode = "🇬🇧";
            break;
        default:
            userCountryFlag = "";
            userCountryCode = "";
            break;
    }
    userCity = userCity.toUpperCase();
    userState = userState.toUpperCase();
    return (
        <div className="userDetail">
            <p className="name">
                <b>{userName}</b>
            </p>
            <p className="address">
                <img className="countryFlag" src={userCountryFlag} alt={userCountryCode} />{" "}
                <span className="city-state">{`${userCity}, ${userState}`}</span>
            </p>
        </div>
    );
};
export default UserDetail;
