import { Link } from "react-router-dom";

import { HAMBURGER_MENU, USER_ICON, YOUTUBE_LOGO } from "../utils/constants";
import { ROUTE_NAMES } from "../navigation/Routes";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 py-4">
      <div className="flex items-center">
        <img src={HAMBURGER_MENU} alt="menu" className="h-8 cursor-pointer" />
        <Link to={ROUTE_NAMES.HOME}>
          <img
            src={YOUTUBE_LOGO}
            alt="menu"
            className="h-6 ml-6 cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex items-center flex-1 justify-center">
        <input
          type="text"
          className="flex w-96 py-2 px-4 border border-gray-500 rounded-l-full"
        />
        <div className="border border-gray-500 border-l-0 rounded-r-full py-2 px-2 bg-slate-200 cursor-pointer">
          🔍
        </div>
      </div>
      <div>
        <img src={USER_ICON} alt="menu" className="h-8 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
