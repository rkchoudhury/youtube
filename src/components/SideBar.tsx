import React from "react";

const menu_list = ["Home", "Shorts", "Subscriptions", "Explore"];

const SideBar = () => {
  return (
    <div className="w-40 px-6">
      <ul>
        {menu_list.map((item) => (
          <li
            key={item}
            className="p-2 border-0 rounded-lg hover:bg-gray-300 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
