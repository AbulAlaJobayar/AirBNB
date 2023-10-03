import { Link } from "react-router-dom";
import airbnb from "../../assets/Airbnb_logo_PNG3.png";
const Logo = () => {
  return (
    <Link to="/">
      <img className="hidden md:block" src={airbnb} width="100" height="100" alt="logo"></img>
    </Link>
  );
};

export default Logo;
