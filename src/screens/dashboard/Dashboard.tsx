import { Outlet } from "react-router-dom";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

const Dashboard = () => {
  return (
    <div className="">
      <Header />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
