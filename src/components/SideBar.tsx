import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../navigation/Routes";

const menu_list = [
  {
    label: "Home",
    path: ROUTE_NAMES.HOME,
  },
  {
    label: "Shorts",
    path: ROUTE_NAMES.HOME,
  },
  {
    label: "Subscriptions",
    path: ROUTE_NAMES.HOME,
  },
  {
    label: "Explore",
    path: ROUTE_NAMES.HOME,
  },
];

const SideBar = () => {
  return (
    <div className="w-40 px-6">
      <ul>
        {menu_list.map(({ label, path }) => (
          <Link to={path}>
            <li
              key={label}
              className="p-2 border-0 rounded-lg hover:bg-gray-300 cursor-pointer"
            >
              {label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
